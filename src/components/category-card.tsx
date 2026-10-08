import { StyleSheet, View } from 'react-native';

import { AppText } from '@/components/app-text';
import { CatalogIcon } from '@/components/catalog-icon';
import type { ToolCategory } from '@/data/catalog';
import { colors, radii, spacing } from '@/theme/tokens';

interface CategoryCardProps {
  category: ToolCategory;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <View style={styles.card}>
      <CatalogIcon
        backgroundColor={category.iconBackground}
        color={category.iconColor}
        name={category.icon}
        size={20}
      />
      <View style={styles.copy}>
        <AppText variant="label" numberOfLines={1}>
          {category.shortLabel}
        </AppText>
        <AppText color={colors.inkMuted} variant="caption">
          {category.toolCount} tools
        </AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: radii.md,
    borderWidth: 1,
    flexBasis: '47%',
    flexDirection: 'row',
    flexGrow: 1,
    gap: spacing.md,
    minHeight: 76,
    padding: spacing.md,
  },
  copy: {
    flex: 1,
    minWidth: 0,
  },
});
