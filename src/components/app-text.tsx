import { Text, type TextProps, type TextStyle } from 'react-native';

import { colors, fonts } from '@/theme/tokens';

type TextVariant = 'body' | 'bodyMedium' | 'caption' | 'heading' | 'label' | 'title';

interface AppTextProps extends TextProps {
  variant?: TextVariant;
  color?: string;
}

const variants: Record<TextVariant, TextStyle> = {
  title: {
    fontFamily: fonts.semibold,
    fontSize: 36,
    lineHeight: 40,
    letterSpacing: -1.4,
  },
  heading: {
    fontFamily: fonts.semibold,
    fontSize: 22,
    lineHeight: 28,
    letterSpacing: -0.5,
  },
  body: {
    fontFamily: fonts.regular,
    fontSize: 16,
    lineHeight: 24,
  },
  bodyMedium: {
    fontFamily: fonts.medium,
    fontSize: 16,
    lineHeight: 23,
  },
  label: {
    fontFamily: fonts.semibold,
    fontSize: 14,
    lineHeight: 20,
  },
  caption: {
    fontFamily: fonts.regular,
    fontSize: 13,
    lineHeight: 18,
  },
};

export function AppText({ color = colors.ink, style, variant = 'body', ...props }: AppTextProps) {
  return <Text {...props} style={[variants[variant], { color }, style]} />;
}
