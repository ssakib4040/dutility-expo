import { Image, StyleSheet, View } from 'react-native';

import { AppText } from '@/components/app-text';
import { radii, spacing } from '@/theme/tokens';

interface BrandLockupProps {
  compact?: boolean;
}

export function BrandLockup({ compact = false }: BrandLockupProps) {
  return (
    <View style={styles.container} accessibilityRole="header">
      <Image
        accessibilityIgnoresInvertColors
        source={require('@/assets/images/dutility-app-icon-clean.png')}
        style={[styles.mark, compact && styles.compactMark]}
      />
      <AppText variant="heading" style={compact && styles.compactText}>
        Dutility
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.sm,
  },
  mark: {
    borderRadius: radii.md,
    height: 40,
    width: 40,
  },
  compactMark: {
    borderRadius: radii.sm,
    height: 32,
    width: 32,
  },
  compactText: {
    fontSize: 19,
    lineHeight: 24,
  },
});
