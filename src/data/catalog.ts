export type CategoryId =
  | 'pdf'
  | 'image'
  | 'video'
  | 'audio'
  | 'document'
  | 'url-qr'
  | 'text'
  | 'file'
  | 'archive'
  | 'ai';

export type CatalogIcon =
  | 'archive-outline'
  | 'file-document-outline'
  | 'file-image-outline'
  | 'file-word-outline'
  | 'file-outline'
  | 'folder-outline'
  | 'image-outline'
  | 'link-variant'
  | 'music-note-outline'
  | 'robot-outline'
  | 'text-box-outline'
  | 'video-outline';

export interface ToolCategory {
  id: CategoryId;
  label: string;
  shortLabel: string;
  toolCount: number;
  icon: CatalogIcon;
  iconBackground: string;
  iconColor: string;
}

export interface ToolDefinition {
  slug: 'pdf-to-word' | 'pdf-to-image';
  categoryId: CategoryId;
  label: string;
  description: string;
  icon: CatalogIcon;
  inputLabel: string;
  outputLabel: string;
  details: string[];
}

export const categories: ToolCategory[] = [
  {
    id: 'pdf',
    label: 'PDF Tools',
    shortLabel: 'PDF',
    toolCount: 13,
    icon: 'file-document-outline',
    iconBackground: '#FFF0EB',
    iconColor: '#C6533B',
  },
  {
    id: 'image',
    label: 'Image Tools',
    shortLabel: 'Images',
    toolCount: 14,
    icon: 'image-outline',
    iconBackground: '#E9F7F2',
    iconColor: '#21866F',
  },
  {
    id: 'video',
    label: 'Video Tools',
    shortLabel: 'Video',
    toolCount: 10,
    icon: 'video-outline',
    iconBackground: '#F4ECFA',
    iconColor: '#7B4A9E',
  },
  {
    id: 'audio',
    label: 'Audio Tools',
    shortLabel: 'Audio',
    toolCount: 9,
    icon: 'music-note-outline',
    iconBackground: '#F4ECFA',
    iconColor: '#7B4A9E',
  },
  {
    id: 'document',
    label: 'Document Tools',
    shortLabel: 'Documents',
    toolCount: 7,
    icon: 'text-box-outline',
    iconBackground: '#EAF1FB',
    iconColor: '#416AA8',
  },
  {
    id: 'url-qr',
    label: 'URL & QR Tools',
    shortLabel: 'URL & QR',
    toolCount: 6,
    icon: 'link-variant',
    iconBackground: '#FFF6DC',
    iconColor: '#987112',
  },
  {
    id: 'text',
    label: 'Text Tools',
    shortLabel: 'Text',
    toolCount: 10,
    icon: 'file-outline',
    iconBackground: '#FFF6DC',
    iconColor: '#987112',
  },
  {
    id: 'file',
    label: 'File Tools',
    shortLabel: 'Files',
    toolCount: 7,
    icon: 'folder-outline',
    iconBackground: '#FFF6DC',
    iconColor: '#987112',
  },
  {
    id: 'archive',
    label: 'Archive Tools',
    shortLabel: 'Archives',
    toolCount: 5,
    icon: 'archive-outline',
    iconBackground: '#FFF6DC',
    iconColor: '#987112',
  },
  {
    id: 'ai',
    label: 'AI Tools',
    shortLabel: 'AI',
    toolCount: 10,
    icon: 'robot-outline',
    iconBackground: '#EEF0FF',
    iconColor: '#555AC5',
  },
];

export const tools: ToolDefinition[] = [
  {
    slug: 'pdf-to-word',
    categoryId: 'pdf',
    label: 'PDF to Word',
    description: 'Turn a PDF into a Word document you can edit.',
    icon: 'file-word-outline',
    inputLabel: 'PDF document',
    outputLabel: 'Editable DOCX',
    details: [
      'Keeps the original PDF unchanged',
      'Creates a separate Word document',
      'Designed for Microsoft Word and compatible editors',
    ],
  },
  {
    slug: 'pdf-to-image',
    categoryId: 'pdf',
    label: 'PDF to Image',
    description: 'Export each PDF page as a crisp PNG or JPG image.',
    icon: 'file-image-outline',
    inputLabel: 'PDF document',
    outputLabel: 'PNG or JPG images',
    details: [
      'Exports one image for each page',
      'Supports PNG and JPG output',
      'Keeps the source PDF unchanged',
    ],
  },
];

export const categoryById = new Map(categories.map((category) => [category.id, category]));

export function findTool(slug: string | undefined) {
  return tools.find((tool) => tool.slug === slug);
}
