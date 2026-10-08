import fs from 'node:fs/promises';
import path from 'node:path';

const debugBase = 'http://127.0.0.1:9333';
const appBase = 'http://127.0.0.1:8081';
const outputDir = path.resolve('store-assets/google-play/raw');

await fs.mkdir(outputDir, { recursive: true });

const targets = await fetch(`${debugBase}/json/list`).then((response) => response.json());
const page = targets.find((target) => target.type === 'page');

if (!page?.webSocketDebuggerUrl) {
  throw new Error('No debuggable Edge page found on port 9333.');
}

const socket = new WebSocket(page.webSocketDebuggerUrl);
const pending = new Map();
let nextId = 1;

socket.addEventListener('message', (event) => {
  const message = JSON.parse(event.data);
  if (!message.id) return;
  const request = pending.get(message.id);
  if (!request) return;
  pending.delete(message.id);
  if (message.error) request.reject(new Error(message.error.message));
  else request.resolve(message.result);
});

await new Promise((resolve, reject) => {
  socket.addEventListener('open', resolve, { once: true });
  socket.addEventListener('error', reject, { once: true });
});

function send(method, params = {}) {
  const id = nextId++;
  const promise = new Promise((resolve, reject) => pending.set(id, { resolve, reject }));
  socket.send(JSON.stringify({ id, method, params }));
  return promise;
}

const pause = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

async function evaluate(expression) {
  const result = await send('Runtime.evaluate', {
    expression,
    awaitPromise: true,
    returnByValue: true,
  });
  if (result.exceptionDetails) throw new Error(result.exceptionDetails.text);
  return result.result.value;
}

async function navigate(url) {
  await send('Page.navigate', { url });
  await pause(3500);
  await evaluate('document.fonts?.ready ?? Promise.resolve()');
  await pause(500);
}

async function capture(filename) {
  const { data } = await send('Page.captureScreenshot', {
    format: 'png',
    fromSurface: true,
    captureBeyondViewport: false,
  });
  const outputPath = path.join(outputDir, filename);
  await fs.writeFile(outputPath, Buffer.from(data, 'base64'));
  console.log(outputPath);
}

await send('Page.enable');
await send('Runtime.enable');
await send('Emulation.setDeviceMetricsOverride', {
  width: 390,
  height: 844,
  deviceScaleFactor: 3,
  mobile: true,
  screenWidth: 390,
  screenHeight: 844,
});
await send('Emulation.setTouchEmulationEnabled', { enabled: true, maxTouchPoints: 5 });
await send('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-color-scheme', value: 'light' }] });

await navigate(`${appBase}/`);
await capture('01-catalog.png');

await evaluate(`(() => {
  const input = document.querySelector('input[aria-label="Search Dutility tools"]');
  if (!input) throw new Error('Search input not found');
  const valueSetter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set;
  valueSetter.call(input, 'pdf');
  const reactKey = Object.keys(input).find((key) => key.startsWith('__reactProps$'));
  if (!reactKey || typeof input[reactKey]?.onChange !== 'function') {
    throw new Error('React input handler not found');
  }
  input[reactKey].onChange({ target: input, nativeEvent: {} });
  input.blur();
  return true;
})()`);
await pause(1000);
await capture('02-search-pdf.png');

await navigate(`${appBase}/tool/pdf-to-word`);
await capture('03-pdf-to-word.png');

await navigate(`${appBase}/tool/pdf-to-image`);
await capture('04-pdf-to-image.png');

socket.close();
