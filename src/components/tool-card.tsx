import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Link } from 'expo-router';
import { Pressable, StyleSheet, View } from 'react-native';

import { AppText } from '@/components/app-text';
import { CatalogIcon } from '@/components/catalog-icon';
import { categoryById, type ToolDefinition } from '@/data/catalog';
import { colors, radii, shadows, spacing } from '@/theme/tokens';

interface ToolCardProps {
  tool: ToolDefinition;
}

export function ToolCard({ tool }: ToolCardProps) {
  const category = categoryById.get(tool.categoryId);

  if (!category) return null;

  return (
    <Link href={{ pathname: '/tool/[slug]', params: { slug: tool.slug } }} asChild>
      <Pressable
        accessibilityHint={`Opens the ${tool.label} workspace`}
        accessibilityRole="button"
        style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}>
        <View style={styles.leading}>
          <CatalogIcon
            backgroundColor={category.iconBackground}
            color={category.iconColor}
            name={tool.icon}
          />
          <View style={styles.copy}>
            <AppText variant="bodyMedium" numberOfLines={1}>
              {tool.label}
            </AppText>
            <AppText color={colors.inkMuted} variant="caption" numberOfLines={2}>
              {tool.description}
            </AppText>
          </View>
        </View>
        <MaterialCommunityIcons color={colors.inkSubtle} name="chevron-right" size={23} />
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  card: {
    ...shadows.card,
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: radii.lg,
    borderWidth: 1,
    flexDirection: 'row',
    gap: spacing.md,
    minHeight: 88,
    padding: spacing.lg,
  },
  cardPressed: {
    backgroundColor: colors.primarySoft,
    borderColor: colors.primary,
    transform: [{ scale: 0.992 }],
  },
  leading: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    gap: spacing.md,
    minWidth: 0,
  },
  copy: {
    flex: 1,
    gap: spacing.xs,
    minWidth: 0,
  },
});
