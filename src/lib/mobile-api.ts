export interface StatusResponse {
  status: 'ok';
  version: string;
}

export class MobileApiError extends Error {
  readonly statusCode?: number;

  constructor(message: string, statusCode?: number) {
    super(message);
    this.name = 'MobileApiError';
    this.statusCode = statusCode;
  }
}

const apiBaseUrl = process.env.EXPO_PUBLIC_API_BASE_URL?.replace(/\/+$/, '');

function getApiUrl(path: string) {
  if (!apiBaseUrl) {
    throw new MobileApiError('EXPO_PUBLIC_API_BASE_URL is not configured.');
  }

  return `${apiBaseUrl}${path.startsWith('/') ? path : `/${path}`}`;
}

async function getJson<T>(path: string): Promise<T> {
  let response: Response;

  try {
    response = await fetch(getApiUrl(path), {
      headers: { Accept: 'application/json' },
      method: 'GET',
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Network request failed.';
    throw new MobileApiError(message);
  }

  if (!response.ok) {
    throw new MobileApiError(`Mobile API request failed with status ${response.status}.`, response.status);
  }

  return (await response.json()) as T;
}

export function getMobileStatus() {
  return getJson<StatusResponse>('/mobile/status');
}
