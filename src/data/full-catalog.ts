/**
 * Dutility's complete utility catalog.
 * Plain data lets Astro, React, search, and SEO pages use one catalog.
 */

export interface PricingTier {
  name: string;
  credits: number;
  priceUsd: number;
}

export interface MenuSubItem {
  label: string;
  url: string;
  comingSoon: boolean;
  icon: string;
  description: string;
  keywords: string[];
  pricing: PricingTier[];
}

export interface MenuItem {
  label: string;
  icon: string;
  subItems: MenuSubItem[];
}

export const standardPricing: PricingTier[] = [
  { name: "Starter", credits: 500, priceUsd: 500 },
  { name: "Growth", credits: 1000, priceUsd: 950 },
  { name: "Scale", credits: 5000, priceUsd: 4500 },
];

export const menuItems: MenuItem[] = [
  {
    label: "PDF Tools",
    icon: "FileText",
    subItems: [
      {
        label: "PDF to Word",
        url: "/service/pdf-to-word",
        comingSoon: false,
        icon: "FileText",
        description:
          "Convert PDF documents to editable Word files with accurate formatting.",
        keywords: [
          "pdf to doc",
          "pdf to docx",
          "convert pdf word",
          "extract text pdf",
          "pdf document converter",
        ],
        pricing: standardPricing,
      },
      {
        label: "PDF to Image",
        url: "/service/pdf-to-image",
        comingSoon: false,
        icon: "Image",
        description: "Convert PDF pages to high-quality JPG or PNG images.",
        keywords: [
          "pdf to jpg",
          "pdf to png",
          "pdf image export",
          "render pdf",
          "pdf screenshot",
        ],
        pricing: standardPricing,
      },
      {
        label: "PDF to Excel",
        url: "/service/pdf-to-excel",
        comingSoon: true,
        icon: "LayoutGrid",
        description:
          "Extract tables and data from PDFs into editable Excel spreadsheets.",
        keywords: [
          "pdf to xls",
          "pdf to xlsx",
          "pdf table extract",
          "pdf data export",
          "convert pdf spreadsheet",
        ],
        pricing: standardPricing,
      },
      {
        label: "PDF to PowerPoint",
        url: "/service/pdf-to-powerpoint",
        comingSoon: true,
        icon: "Layers",
        description:
          "Transform PDF presentations into editable PowerPoint slides.",
        keywords: [
          "pdf to ppt",
          "pdf to pptx",
          "pdf slides",
          "convert pdf presentation",
          "pdf deck",
        ],
        pricing: standardPricing,
      },
      {
        label: "Merge PDF",
        url: "/service/merge-pdf",
        comingSoon: true,
        icon: "Merge",
        description: "Combine multiple PDF files into a single document.",
        keywords: [
          "combine pdf",
          "join pdf",
          "pdf merger",
          "merge documents",
          "concatenate pdf",
        ],
        pricing: standardPricing,
      },
      {
        label: "Split PDF",
        url: "/service/split-pdf",
        comingSoon: true,
        icon: "Split",
        description:
          "Split a PDF into separate files by page range or extract individual pages.",
        keywords: [
          "separate pdf",
          "divide pdf",
          "pdf splitter",
          "extract pdf pages",
          "break pdf",
        ],
        pricing: standardPricing,
      },
      {
        label: "Compress PDF",
        url: "/service/compress-pdf",
        comingSoon: true,
        icon: "Percent",
        description:
          "Reduce PDF file size while maintaining quality for easy sharing.",
        keywords: [
          "reduce pdf size",
          "optimize pdf",
          "shrink pdf",
          "pdf smaller",
          "compact pdf",
        ],
        pricing: standardPricing,
      },
      {
        label: "Add Watermark to PDF",
        url: "/service/add-watermark-pdf",
        comingSoon: true,
        icon: "Shield",
        description:
          "Add text or image watermarks to protect your PDF documents.",
        keywords: [
          "pdf watermark",
          "stamp pdf",
          "brand pdf",
          "protect pdf",
          "pdf copyright",
        ],
        pricing: standardPricing,
      },
      {
        label: "Remove Watermark",
        url: "/service/remove-watermark",
        comingSoon: true,
        icon: "Eye",
        description:
          "Remove watermarks, stamps, and overlays from PDF documents.",
        keywords: [
          "delete watermark",
          "clean pdf",
          "remove stamp",
          "pdf cleanup",
          "erase watermark",
        ],
        pricing: standardPricing,
      },
      {
        label: "Extract Pages",
        url: "/service/extract-pages",
        comingSoon: true,
        icon: "Copy",
        description:
          "Pull specific pages from a PDF and save them as a new file.",
        keywords: [
          "extract pdf pages",
          "pull pages",
          "save pdf pages",
          "pdf page extractor",
          "copy pdf pages",
        ],
        pricing: standardPricing,
      },
      {
        label: "Rotate PDF",
        url: "/service/rotate-pdf",
        comingSoon: true,
        icon: "RotateCw",
        description:
          "Rotate individual or all pages in a PDF to the correct orientation.",
        keywords: [
          "flip pdf",
          "turn pdf",
          "pdf orientation",
          "rotate pdf pages",
          "fix pdf rotation",
        ],
        pricing: standardPricing,
      },
      {
        label: "PDF Signature",
        url: "/service/pdf-signature",
        comingSoon: true,
        icon: "Pen",
        description:
          "Add digital signatures to PDF documents quickly and securely.",
        keywords: [
          "sign pdf",
          "digital sign",
          "esign pdf",
          "pdf autograph",
          "electronic signature",
        ],
        pricing: standardPricing,
      },
      {
        label: "PDF to Text",
        url: "/service/pdf-to-text",
        comingSoon: true,
        icon: "Type",
        description:
          "Extract plain text from PDF files for editing or indexing.",
        keywords: [
          "pdf to txt",
          "extract text",
          "pdf ocr",
          "pdf readable",
          "pdf text extractor",
        ],
        pricing: standardPricing,
      },
    ],
  },
  {
    label: "Image Tools",
    icon: "Image",
    subItems: [
      {
        label: "Image Optimizer",
        url: "/service/image-optimizer",
        comingSoon: true,
        icon: "Zap",
        description:
          "Optimize images for web use by reducing file size without visible quality loss.",
        keywords: [
          "optimize photos",
          "web images",
          "image performance",
          "page speed",
          "lossless compression",
        ],
        pricing: standardPricing,
      },
      {
        label: "Compress Image",
        url: "/service/compress-image",
        comingSoon: true,
        icon: "Percent",
        description:
          "Compress JPG, PNG, and WebP images to smaller file sizes.",
        keywords: [
          "reduce image size",
          "shrink photo",
          "image smaller",
          "jpg compress",
          "png compress",
        ],
        pricing: standardPricing,
      },
      {
        label: "Image Converter",
        url: "/service/image-converter",
        comingSoon: true,
        icon: "Wand2",
        description:
          "Convert images between formats including JPG, PNG, WebP, GIF, BMP, and TIFF.",
        keywords: [
          "jpg to png",
          "png to jpg",
          "webp converter",
          "image format change",
          "photo converter",
        ],
        pricing: standardPricing,
      },
      {
        label: "Resize Image",
        url: "/service/resize-image",
        comingSoon: true,
        icon: "Crop",
        description:
          "Resize images to exact dimensions or by percentage for any use case.",
        keywords: [
          "scale image",
          "change image size",
          "image dimensions",
          "photo resize",
          "stretch image",
        ],
        pricing: standardPricing,
      },
      {
        label: "Image to PDF",
        url: "/service/image-to-pdf",
        comingSoon: true,
        icon: "FileText",
        description: "Convert single or multiple images into a PDF document.",
        keywords: [
          "jpg to pdf",
          "png to pdf",
          "photos to pdf",
          "image document",
          "create pdf images",
        ],
        pricing: standardPricing,
      },
      {
        label: "Crop Image",
        url: "/service/crop-image",
        comingSoon: true,
        icon: "Crop",
        description:
          "Crop images to remove unwanted areas and focus on what matters.",
        keywords: [
          "cut image",
          "trim photo",
          "image crop tool",
          "remove edges",
          "square image",
        ],
        pricing: standardPricing,
      },
      {
        label: "Image Format Converter",
        url: "/service/image-format-converter",
        comingSoon: true,
        icon: "Wand2",
        description:
          "Bulk convert images between all popular formats with custom quality settings.",
        keywords: [
          "bulk image convert",
          "format change",
          "heic to jpg",
          "raw converter",
          "svg convert",
        ],
        pricing: standardPricing,
      },
      {
        label: "Image Watermark",
        url: "/service/image-watermark",
        comingSoon: true,
        icon: "Shield",
        description:
          "Add text or logo watermarks to protect your images online.",
        keywords: [
          "photo watermark",
          "brand images",
          "logo overlay",
          "protect photos",
          "copyright image",
        ],
        pricing: standardPricing,
      },
      {
        label: "Batch Image Converter",
        url: "/service/batch-image-converter",
        comingSoon: true,
        icon: "Layers",
        description:
          "Convert dozens of images to a different format all at once.",
        keywords: [
          "batch convert",
          "multiple images",
          "mass convert",
          "bulk photos",
          "convert folder",
        ],
        pricing: standardPricing,
      },
      {
        label: "Image Upscaler",
        url: "/service/image-upscaler",
        comingSoon: true,
        icon: "Zap",
        description:
          "Enlarge and enhance images with AI-powered upscaling for sharper results.",
        keywords: [
          "enlarge image",
          "ai upscale",
          "increase resolution",
          "photo enhance",
          "hd upscale",
        ],
        pricing: standardPricing,
      },
      {
        label: "Remove Background",
        url: "/service/remove-background",
        comingSoon: true,
        icon: "Eye",
        description:
          "Automatically remove image backgrounds and make them transparent.",
        keywords: [
          "background remover",
          "transparent png",
          "cutout image",
          "remove bg",
          "isolate subject",
        ],
        pricing: standardPricing,
      },
      {
        label: "Image Rotate",
        url: "/service/image-rotate",
        comingSoon: true,
        icon: "RotateCw",
        description:
          "Rotate images by any angle â€” 90Â°, 180Â°, 270Â°, or custom degrees.",
        keywords: [
          "flip photo",
          "turn image",
          "orientation fix",
          "straighten photo",
          "tilt image",
        ],
        pricing: standardPricing,
      },
      {
        label: "Image Flip",
        url: "/service/image-flip",
        comingSoon: true,
        icon: "Crop",
        description: "Flip images horizontally or vertically with one click.",
        keywords: [
          "mirror image",
          "reflect photo",
          "horizontal flip",
          "vertical flip",
          "reverse image",
        ],
        pricing: standardPricing,
      },
      {
        label: "Signature Creator",
        url: "/service/signature-creator",
        comingSoon: true,
        icon: "Pen",
        description:
          "Create a signature by typing your name in stylish fonts or drawing it freehand.",
        keywords: [
          "signature maker",
          "create signature",
          "draw signature",
          "type signature",
          "sign name online",
        ],
        pricing: standardPricing,
      },
    ],
  },
  {
    label: "Video Tools",
    icon: "Video",
    subItems: [
      {
        label: "Video Converter",
        url: "/service/video-converter",
        comingSoon: true,
        icon: "Wand2",
        description:
          "Convert videos between MP4, AVI, MOV, MKV, WebM, and more formats.",
        keywords: [
          "mp4 to avi",
          "mov to mp4",
          "video format",
          "transcode video",
          "video file converter",
        ],
        pricing: standardPricing,
      },
      {
        label: "Video Compressor",
        url: "/service/video-compressor",
        comingSoon: true,
        icon: "Percent",
        description:
          "Reduce video file size without significant quality loss for easy sharing.",
        keywords: [
          "compress mp4",
          "reduce video size",
          "shrink video",
          "video smaller",
          "optimize video",
        ],
        pricing: standardPricing,
      },
      {
        label: "Merge Videos",
        url: "/service/merge-videos",
        comingSoon: true,
        icon: "Merge",
        description:
          "Combine multiple video clips into a single seamless video file.",
        keywords: [
          "join videos",
          "combine clips",
          "video merger",
          "concatenate video",
          "stitch videos",
        ],
        pricing: standardPricing,
      },
      {
        label: "Split Video",
        url: "/service/split-video",
        comingSoon: true,
        icon: "Split",
        description:
          "Split a long video into multiple shorter clips by duration or file size.",
        keywords: [
          "cut video",
          "divide video",
          "video splitter",
          "chunk video",
          "segment video",
        ],
        pricing: standardPricing,
      },
      {
        label: "Video to GIF",
        url: "/service/video-to-gif",
        comingSoon: true,
        icon: "Film",
        description:
          "Turn video clips into animated GIFs perfect for social media and messaging.",
        keywords: [
          "mp4 to gif",
          "create gif",
          "animated gif",
          "video meme",
          "gif maker",
        ],
        pricing: standardPricing,
      },
      {
        label: "GIF to Video",
        url: "/service/gif-to-video",
        comingSoon: true,
        icon: "Video",
        description: "Convert animated GIFs into MP4 or WebM video files.",
        keywords: [
          "gif to mp4",
          "gif video",
          "convert gif",
          "animated to video",
          "gif converter",
        ],
        pricing: standardPricing,
      },
      {
        label: "Trim Video",
        url: "/service/trim-video",
        comingSoon: true,
        icon: "Scissors",
        description:
          "Cut and trim video clips to remove unwanted sections from start or end.",
        keywords: [
          "cut video",
          "crop video",
          "video trimmer",
          "shorten video",
          "clip video",
        ],
        pricing: standardPricing,
      },
      {
        label: "Video Watermark",
        url: "/service/video-watermark",
        comingSoon: true,
        icon: "Shield",
        description:
          "Add text or logo watermarks to protect your video content.",
        keywords: [
          "brand video",
          "logo overlay",
          "copyright video",
          "video stamp",
          "protect video",
        ],
        pricing: standardPricing,
      },
      {
        label: "Extract Audio from Video",
        url: "/service/extract-audio-video",
        comingSoon: true,
        icon: "Music",
        description:
          "Extract audio tracks from video files and save as MP3 or WAV.",
        keywords: [
          "video to mp3",
          "extract sound",
          "audio from video",
          "rip audio",
          "separate audio",
        ],
        pricing: standardPricing,
      },
      {
        label: "Video Subtitle Extractor",
        url: "/service/video-subtitle-extractor",
        comingSoon: true,
        icon: "FileText",
        description:
          "Extract embedded subtitles from video files in SRT or VTT format.",
        keywords: [
          "extract subs",
          "video captions",
          "srt extract",
          "subtitle ripper",
          "closed captions",
        ],
        pricing: standardPricing,
      },
    ],
  },
  {
    label: "Audio Tools",
    icon: "Music",
    subItems: [
      {
        label: "Audio Converter",
        url: "/service/audio-converter",
        comingSoon: true,
        icon: "Wand2",
        description:
          "Convert audio files between MP3, WAV, FLAC, AAC, OGG, and more.",
        keywords: [
          "mp3 to wav",
          "flac to mp3",
          "audio format",
          "transcode audio",
          "music converter",
        ],
        pricing: standardPricing,
      },
      {
        label: "Compress Audio",
        url: "/service/compress-audio",
        comingSoon: true,
        icon: "Percent",
        description:
          "Reduce audio file size while preserving listening quality.",
        keywords: [
          "reduce audio size",
          "shrink mp3",
          "audio smaller",
          "compress wav",
          "optimize audio",
        ],
        pricing: standardPricing,
      },
      {
        label: "Audio Merge",
        url: "/service/audio-merge",
        comingSoon: true,
        icon: "Merge",
        description:
          "Join multiple audio files into a single continuous track.",
        keywords: [
          "combine audio",
          "join mp3",
          "merge songs",
          "audio joiner",
          "concatenate audio",
        ],
        pricing: standardPricing,
      },
      {
        label: "Audio Trim",
        url: "/service/audio-trim",
        comingSoon: true,
        icon: "Scissors",
        description:
          "Cut and trim audio clips to remove silence or unwanted parts.",
        keywords: [
          "cut audio",
          "crop mp3",
          "audio cutter",
          "shorten audio",
          "trim music",
        ],
        pricing: standardPricing,
      },
      {
        label: "Audio Metadata Editor",
        url: "/service/audio-metadata-editor",
        comingSoon: true,
        icon: "Pen",
        description:
          "Edit ID3 tags and metadata like artist, album, title, and cover art.",
        keywords: [
          "id3 editor",
          "mp3 tags",
          "edit song info",
          "audio tags",
          "music metadata",
        ],
        pricing: standardPricing,
      },
      {
        label: "Music to MP3",
        url: "/service/music-to-mp3",
        comingSoon: true,
        icon: "Music",
        description: "Convert music files from any format to high-quality MP3.",
        keywords: [
          "wav to mp3",
          "flac to mp3",
          "aac to mp3",
          "ogg to mp3",
          "music converter",
        ],
        pricing: standardPricing,
      },
      {
        label: "Audio Format Converter",
        url: "/service/audio-format-converter",
        comingSoon: true,
        icon: "Wand2",
        description:
          "Batch convert audio files between all popular formats with custom bitrate.",
        keywords: [
          "batch audio",
          "bulk convert audio",
          "change audio format",
          "audio transcoder",
          "music format",
        ],
        pricing: standardPricing,
      },
      {
        label: "Audio Mixer",
        url: "/service/audio-mixer",
        comingSoon: true,
        icon: "Zap",
        description:
          "Mix multiple audio tracks together with volume control for each track.",
        keywords: [
          "mix audio",
          "blend tracks",
          "audio overlay",
          "sound mixer",
          "combine tracks",
        ],
        pricing: standardPricing,
      },
      {
        label: "Audio Splitter",
        url: "/service/audio-splitter",
        comingSoon: true,
        icon: "Split",
        description:
          "Split an audio file into multiple segments by time or silence detection.",
        keywords: [
          "divide audio",
          "separate tracks",
          "audio chunk",
          "split mp3",
          "break audio",
        ],
        pricing: standardPricing,
      },
    ],
  },
  {
    label: "Document Tools",
    icon: "LayoutGrid",
    subItems: [
      {
        label: "Word to PDF",
        url: "/service/word-to-pdf",
        comingSoon: true,
        icon: "File",
        description:
          "Convert Word documents to PDF format with preserved formatting.",
        keywords: [
          "doc to pdf",
          "docx to pdf",
          "word converter",
          "document to pdf",
          "ms word pdf",
        ],
        pricing: standardPricing,
      },
      {
        label: "Excel to PDF",
        url: "/service/excel-to-pdf",
        comingSoon: true,
        icon: "LayoutGrid",
        description:
          "Convert Excel spreadsheets to PDF with all tables and charts intact.",
        keywords: [
          "xls to pdf",
          "xlsx to pdf",
          "spreadsheet pdf",
          "excel converter",
          "table to pdf",
        ],
        pricing: standardPricing,
      },
      {
        label: "PowerPoint to PDF",
        url: "/service/powerpoint-to-pdf",
        comingSoon: true,
        icon: "Layers",
        description:
          "Convert PowerPoint presentations into PDF slides for easy sharing.",
        keywords: [
          "ppt to pdf",
          "pptx to pdf",
          "presentation pdf",
          "slides to pdf",
          "powerpoint converter",
        ],
        pricing: standardPricing,
      },
      {
        label: "Document Converter",
        url: "/service/document-converter",
        comingSoon: true,
        icon: "Wand2",
        description:
          "Convert documents between Word, Excel, PowerPoint, ODT, and RTF formats.",
        keywords: [
          "doc to odt",
          "rtf converter",
          "document format",
          "office converter",
          "file converter",
        ],
        pricing: standardPricing,
      },
      {
        label: "Document Compressor",
        url: "/service/document-compressor",
        comingSoon: true,
        icon: "Percent",
        description:
          "Compress Word, Excel, and PowerPoint files to reduce size.",
        keywords: [
          "compress docx",
          "reduce word size",
          "shrink ppt",
          "smaller excel",
          "optimize document",
        ],
        pricing: standardPricing,
      },
      {
        label: "PDF Editor",
        url: "/service/pdf-editor",
        comingSoon: true,
        icon: "Pen",
        description:
          "Edit PDFs directly â€” add text, images, annotations, and redactions.",
        keywords: [
          "edit pdf",
          "modify pdf",
          "annotate pdf",
          "pdf markup",
          "pdf writing",
        ],
        pricing: standardPricing,
      },
      {
        label: "Document Merger",
        url: "/service/document-merger",
        comingSoon: true,
        icon: "Merge",
        description:
          "Merge multiple Word, Excel, or PowerPoint files into one document.",
        keywords: [
          "combine docs",
          "merge word",
          "join documents",
          "combine files",
          "document joiner",
        ],
        pricing: standardPricing,
      },
    ],
  },
  {
    label: "URL & QR Tools",
    icon: "LinkIcon",
    subItems: [
      {
        label: "URL Shortener",
        url: "/service/url-shortener",
        comingSoon: true,
        icon: "Share2",
        description: "Shorten long URLs into compact, shareable links.",
        keywords: [
          "short link",
          "tiny url",
          "link shortener",
          "url compressor",
          "shorten link",
        ],
        pricing: standardPricing,
      },
      {
        label: "QR Code Generator",
        url: "/service/qr-code-generator",
        comingSoon: true,
        icon: "QrCode",
        description:
          "Create customizable QR codes for URLs, text, WiFi, contacts, and more.",
        keywords: [
          "qr maker",
          "create qr",
          "generate qr code",
          "barcode",
          "qr generator",
        ],
        pricing: standardPricing,
      },
      {
        label: "QR Code Reader",
        url: "/service/qr-code-reader",
        comingSoon: true,
        icon: "QrCode",
        description:
          "Scan and decode QR codes from uploaded images or your camera.",
        keywords: [
          "scan qr",
          "decode qr",
          "read qr code",
          "qr scanner",
          "barcode reader",
        ],
        pricing: standardPricing,
      },
      {
        label: "Link Analyzer",
        url: "/service/link-analyzer",
        comingSoon: true,
        icon: "Search",
        description:
          "Analyze URLs for safety, redirects, SEO metadata, and page details.",
        keywords: [
          "url checker",
          "link preview",
          "safe link",
          "url scanner",
          "link safety",
        ],
        pricing: standardPricing,
      },
      {
        label: "URL Expander",
        url: "/service/url-expander",
        comingSoon: true,
        icon: "Download",
        description:
          "Expand shortened URLs to reveal the full destination link before clicking.",
        keywords: [
          "unshorten url",
          "expand link",
          "reveal url",
          "url decoder",
          "resolve short link",
        ],
        pricing: standardPricing,
      },
      {
        label: "URL to QR",
        url: "/service/url-to-qr",
        comingSoon: true,
        icon: "QrCode",
        description:
          "Instantly turn any URL into a scannable QR code for print or sharing.",
        keywords: [
          "link to qr",
          "url qr code",
          "website qr",
          "page qr",
          "share qr",
        ],
        pricing: standardPricing,
      },
    ],
  },
  {
    label: "Text Tools",
    icon: "Type",
    subItems: [
      {
        label: "Word Counter",
        url: "/service/word-counter",
        comingSoon: true,
        icon: "AlignLeft",
        description:
          "Count words, characters, sentences, and paragraphs in your text.",
        keywords: [
          "character count",
          "text stats",
          "letter count",
          "word calculator",
          "text length",
        ],
        pricing: standardPricing,
      },
      {
        label: "Text Formatter",
        url: "/service/text-formatter",
        comingSoon: true,
        icon: "AlignLeft",
        description:
          "Format and clean up text â€” remove extra spaces, fix line breaks, and align.",
        keywords: [
          "clean text",
          "format text",
          "pretty text",
          "text beautifier",
          "normalize text",
        ],
        pricing: standardPricing,
      },
      {
        label: "Case Converter",
        url: "/service/case-converter",
        comingSoon: true,
        icon: "Wand2",
        description:
          "Convert text between uppercase, lowercase, title case, sentence case, and more.",
        keywords: [
          "lowercase",
          "uppercase",
          "capitalize",
          "text case",
          "change case",
        ],
        pricing: standardPricing,
      },
      {
        label: "JSON Formatter",
        url: "/service/json-formatter",
        comingSoon: true,
        icon: "Code",
        description:
          "Format, validate, and beautify JSON data with syntax highlighting.",
        keywords: [
          "json prettify",
          "json validator",
          "format json",
          "json beautifier",
          "json parse",
        ],
        pricing: standardPricing,
      },
      {
        label: "Base64 Encoder/Decoder",
        url: "/service/base64-encoder-decoder",
        comingSoon: true,
        icon: "Zap",
        description:
          "Encode text or files to Base64 and decode Base64 strings back to original.",
        keywords: [
          "base64 encode",
          "base64 decode",
          "binary to text",
          "ascii encode",
          "base64 converter",
        ],
        pricing: standardPricing,
      },
      {
        label: "Text Compressor",
        url: "/service/text-compressor",
        comingSoon: true,
        icon: "Percent",
        description:
          "Compress text by removing whitespace, comments, and redundant characters.",
        keywords: [
          "minify text",
          "shrink text",
          "reduce text size",
          "compact text",
          "text optimizer",
        ],
        pricing: standardPricing,
      },
      {
        label: "Spell Checker",
        url: "/service/spell-checker",
        comingSoon: true,
        icon: "Search",
        description:
          "Check your text for spelling and grammar errors with instant corrections.",
        keywords: [
          "grammar check",
          "typo fix",
          "spelling correct",
          "proofread",
          "text check",
        ],
        pricing: standardPricing,
      },
      {
        label: "Markdown Preview",
        url: "/service/markdown-preview",
        comingSoon: true,
        icon: "Eye",
        description:
          "Write and preview Markdown in real-time with rendered HTML output.",
        keywords: [
          "md preview",
          "markdown editor",
          "md renderer",
          "markdown viewer",
          "readme preview",
        ],
        pricing: standardPricing,
      },
      {
        label: "Text to Speech",
        url: "/service/text-to-speech",
        comingSoon: true,
        icon: "Music",
        description: "Convert written text into natural-sounding audio speech.",
        keywords: [
          "tts",
          "read aloud",
          "text audio",
          "speech synthesis",
          "voice generator",
        ],
        pricing: standardPricing,
      },
      {
        label: "Unicode Converter",
        url: "/service/unicode-converter",
        comingSoon: true,
        icon: "Code",
        description:
          "Convert text to Unicode escape sequences and decode them back to readable text.",
        keywords: [
          "unicode escape",
          "utf8 converter",
          "character code",
          "unicode decode",
          "special characters",
        ],
        pricing: standardPricing,
      },
    ],
  },
  {
    label: "File Tools",
    icon: "Folder",
    subItems: [
      {
        label: "File Converter",
        url: "/service/file-converter",
        comingSoon: true,
        icon: "Wand2",
        description:
          "Convert files between dozens of formats across all file types.",
        keywords: [
          "file format",
          "convert file",
          "file transcoder",
          "any to any",
          "universal converter",
        ],
        pricing: standardPricing,
      },
      {
        label: "File Compressor",
        url: "/service/file-compressor",
        comingSoon: true,
        icon: "Percent",
        description:
          "Compress any file type to reduce size for storage or sharing.",
        keywords: [
          "reduce file size",
          "shrink file",
          "file optimizer",
          "compact file",
          "file smaller",
        ],
        pricing: standardPricing,
      },
      {
        label: "ZIP/RAR Extractor",
        url: "/service/zip-rar-extractor",
        comingSoon: true,
        icon: "Archive",
        description:
          "Extract files from ZIP, RAR, 7Z, and TAR archives online.",
        keywords: [
          "unzip",
          "unrar",
          "extract archive",
          "open zip",
          "decompress file",
        ],
        pricing: standardPricing,
      },
      {
        label: "File Merger",
        url: "/service/file-merger",
        comingSoon: true,
        icon: "Merge",
        description:
          "Merge multiple files of the same type into a single output file.",
        keywords: [
          "combine files",
          "join files",
          "file joiner",
          "merge documents",
          "concatenate files",
        ],
        pricing: standardPricing,
      },
      {
        label: "File Splitter",
        url: "/service/file-splitter",
        comingSoon: true,
        icon: "Split",
        description:
          "Split large files into smaller chunks for easier transfer or storage.",
        keywords: [
          "divide file",
          "break file",
          "file chunk",
          "split large file",
          "segment file",
        ],
        pricing: standardPricing,
      },
      {
        label: "Batch File Converter",
        url: "/service/batch-file-converter",
        comingSoon: true,
        icon: "Layers",
        description:
          "Convert multiple files to a different format all at once.",
        keywords: [
          "bulk convert",
          "mass convert",
          "batch process",
          "convert folder",
          "multiple files",
        ],
        pricing: standardPricing,
      },
      {
        label: "File Hash Generator",
        url: "/service/file-hash-generator",
        comingSoon: true,
        icon: "Shield",
        description:
          "Generate MD5, SHA1, SHA256 checksums to verify file integrity.",
        keywords: [
          "checksum",
          "md5 generator",
          "sha256",
          "file integrity",
          "hash check",
        ],
        pricing: standardPricing,
      },
    ],
  },
  {
    label: "Archive Tools",
    icon: "Archive",
    subItems: [
      {
        label: "ZIP Creator",
        url: "/service/zip-creator",
        comingSoon: true,
        icon: "Archive",
        description:
          "Create ZIP archives from your files and folders with optional password protection.",
        keywords: [
          "create zip",
          "make zip",
          "compress to zip",
          "zip folder",
          "zip file",
        ],
        pricing: standardPricing,
      },
      {
        label: "RAR Extractor",
        url: "/service/rar-extractor",
        comingSoon: true,
        icon: "Archive",
        description:
          "Extract files from RAR archives online without installing software.",
        keywords: [
          "unrar",
          "open rar",
          "extract rar",
          "rar decompress",
          "rar file opener",
        ],
        pricing: standardPricing,
      },
      {
        label: "7Z Tools",
        url: "/service/7z-tools",
        comingSoon: true,
        icon: "Archive",
        description:
          "Create, extract, and manage 7Z archives with high compression ratios.",
        keywords: [
          "7zip",
          "create 7z",
          "extract 7z",
          "7z compress",
          "7z decompress",
        ],
        pricing: standardPricing,
      },
      {
        label: "Archive Converter",
        url: "/service/archive-converter",
        comingSoon: true,
        icon: "Wand2",
        description:
          "Convert archives between ZIP, RAR, 7Z, TAR, and GZ formats.",
        keywords: [
          "zip to rar",
          "rar to zip",
          "7z to zip",
          "archive format",
          "compress converter",
        ],
        pricing: standardPricing,
      },
      {
        label: "TAR Creator",
        url: "/service/tar-creator",
        comingSoon: true,
        icon: "Archive",
        description:
          "Create TAR and TAR.GZ archives for Unix/Linux file packaging.",
        keywords: [
          "create tar",
          "tar gz",
          "tape archive",
          "tar compress",
          "linux archive",
        ],
        pricing: standardPricing,
      },
    ],
  },
  {
    label: "AI Tools",
    icon: "Sparkles",
    subItems: [
      {
        label: "AI Text Generator",
        url: "/service/ai-text-generator",
        comingSoon: true,
        icon: "Sparkles",
        description:
          "Generate high-quality text content using advanced AI language models.",
        keywords: [
          "ai writer",
          "text ai",
          "content generator",
          "ai copywriter",
          "auto text",
        ],
        pricing: standardPricing,
      },
      {
        label: "AI Image Generator",
        url: "/service/ai-image-generator",
        comingSoon: true,
        icon: "Sparkles",
        description:
          "Create stunning images from text descriptions with AI art generation.",
        keywords: [
          "ai art",
          "text to image",
          "ai drawing",
          "image creator",
          "ai picture",
        ],
        pricing: standardPricing,
      },
      {
        label: "AI Code Generator",
        url: "/service/ai-code-generator",
        comingSoon: true,
        icon: "Sparkles",
        description:
          "Generate code snippets and functions from natural language descriptions.",
        keywords: [
          "code ai",
          "ai programming",
          "generate code",
          "ai developer",
          "code writer",
        ],
        pricing: standardPricing,
      },
      {
        label: "AI Summarizer",
        url: "/service/ai-summarizer",
        comingSoon: true,
        icon: "Sparkles",
        description:
          "Summarize long articles, documents, or text into concise key points.",
        keywords: [
          "text summary",
          "article summarizer",
          "ai summary",
          "condense text",
          "tl dr",
        ],
        pricing: standardPricing,
      },
      {
        label: "AI Translator",
        url: "/service/ai-translator",
        comingSoon: true,
        icon: "Sparkles",
        description:
          "Translate text between 100+ languages with natural AI-powered results.",
        keywords: [
          "language translator",
          "ai translate",
          "text translator",
          "multi language",
          "auto translate",
        ],
        pricing: standardPricing,
      },
      {
        label: "AI Paraphraser",
        url: "/service/ai-paraphraser",
        comingSoon: true,
        icon: "Sparkles",
        description:
          "Rewrite text in different styles while preserving the original meaning.",
        keywords: [
          "rewrite text",
          "rephrase",
          "text spinner",
          "content rewriter",
          "paraphrase tool",
        ],
        pricing: standardPricing,
      },
      {
        label: "AI Grammar Checker",
        url: "/service/ai-grammar-checker",
        comingSoon: true,
        icon: "Sparkles",
        description:
          "Check and fix grammar, punctuation, and style issues with AI suggestions.",
        keywords: [
          "grammar fix",
          "writing assistant",
          "proofread ai",
          "spell check",
          "english corrector",
        ],
        pricing: standardPricing,
      },
      {
        label: "AI Image Enhancer",
        url: "/service/ai-image-enhancer",
        comingSoon: true,
        icon: "Sparkles",
        description:
          "Enhance image quality, sharpen details, and restore old photos with AI.",
        keywords: [
          "photo enhancer",
          "image improve",
          "ai photo fix",
          "restore photo",
          "picture enhancer",
        ],
        pricing: standardPricing,
      },
      {
        label: "AI Video Downloader",
        url: "/service/ai-video-downloader",
        comingSoon: true,
        icon: "Sparkles",
        description:
          "Download videos from popular platforms with AI-assisted quality selection.",
        keywords: [
          "video grabber",
          "download video",
          "save video",
          "video ripper",
          "offline video",
        ],
        pricing: standardPricing,
      },
      {
        label: "AI Chat",
        url: "/service/ai-chat",
        comingSoon: true,
        icon: "Sparkles",
        description:
          "Chat with an AI assistant for questions, brainstorming, and problem solving.",
        keywords: [
          "chatbot",
          "ai assistant",
          "chat gpt",
          "ai conversation",
          "virtual assistant",
        ],
        pricing: standardPricing,
      },
    ],
  },
];

export const allTools = menuItems.flatMap((group) => group.subItems);

export const findToolByUrl = (url: string) =>
  allTools.find((tool) => tool.url === url);
