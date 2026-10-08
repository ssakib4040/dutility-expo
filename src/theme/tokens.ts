import { Platform } from 'react-native';

export const colors = {
  canvas: '#F7F7F9',
  surface: '#FFFFFF',
  ink: '#23232D',
  inkMuted: '#656574',
  inkSubtle: '#858594',
  primary: '#6366F1',
  primaryPressed: '#5154D9',
  primarySoft: '#ECECFF',
  border: '#DEDEE6',
  borderStrong: '#CBCBD7',
  disabled: '#EFEFF3',
  white: '#FFFFFF',
  danger: '#C93C3C',
} as const;

export const fonts = {
  regular: 'IBMPlexSans_400Regular',
  medium: 'IBMPlexSans_500Medium',
  semibold: 'IBMPlexSans_600SemiBold',
  bold: 'IBMPlexSans_700Bold',
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
  section: 40,
} as const;

export const radii = {
  sm: 8,
  md: 12,
  lg: 16,
  round: 999,
} as const;

export const shadows = {
  card: Platform.select({
    ios: {
      shadowColor: '#23232D',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.05,
      shadowRadius: 8,
    },
    android: { elevation: 1 },
    default: {
      boxShadow: '0 2px 10px rgba(35, 35, 45, 0.05)',
    },
  }),
} as const;

export const layout = {
  maxWidth: 720,
  screenPadding: 20,
  minTouchTarget: 44,
} as const;
