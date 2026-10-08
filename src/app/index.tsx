import { useMemo, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppText } from '@/components/app-text';
import { BrandLockup } from '@/components/brand-lockup';
import { CategoryCard } from '@/components/category-card';
import { SearchField } from '@/components/search-field';
import { ToolCard } from '@/components/tool-card';
import { categories, tools } from '@/data/catalog';
import { colors, layout, spacing } from '@/theme/tokens';

export default function HomeScreen() {
  const [query, setQuery] = useState('');
  const normalizedQuery = query.trim().toLowerCase();

  const filteredTools = useMemo(
    () =>
      tools.filter((tool) => {
        if (!normalizedQuery) return true;
        const category = categories.find((item) => item.id === tool.categoryId);
        return `${tool.label} ${tool.description} ${tool.inputLabel} ${tool.outputLabel} ${category?.label ?? ''}`
          .toLowerCase()
          .includes(normalizedQuery);
      }),
    [normalizedQuery],
  );

  const filteredCategories = useMemo(
    () =>
      categories.filter((category) =>
        normalizedQuery
          ? `${category.label} ${category.shortLabel}`.toLowerCase().includes(normalizedQuery)
          : true,
      ),
    [normalizedQuery],
  );

  const hasResults = filteredTools.length > 0 || filteredCategories.length > 0;

  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        contentInsetAdjustmentBehavior="automatic"
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="handled">
        <View style={styles.content}>
          <BrandLockup />

          <View style={styles.hero}>
            <AppText variant="title">Every useful digital tool, in one place.</AppText>
            <AppText color={colors.inkMuted}>
              Prepare documents, images, media, text, and files without changing apps.
            </AppText>
          </View>

          <SearchField onChangeText={setQuery} value={query} />

          {!hasResults && (
            <View style={styles.emptyState}>
              <AppText variant="bodyMedium">No matching tools</AppText>
              <AppText color={colors.inkMuted} variant="caption">
                Try a format such as PDF, image, or text.
              </AppText>
            </View>
          )}

          {filteredTools.length > 0 && (
            <View style={styles.section}>
              <View style={styles.sectionHeading}>
                <AppText variant="heading">Workspaces</AppText>
                <AppText color={colors.inkMuted} variant="caption">
                  {filteredTools.length} {filteredTools.length === 1 ? 'workspace' : 'workspaces'}
                </AppText>
              </View>
              <View style={styles.toolList}>
                {filteredTools.map((tool) => (
                  <ToolCard key={tool.slug} tool={tool} />
                ))}
              </View>
            </View>
          )}

          {filteredCategories.length > 0 && (
            <View style={styles.section}>
              <View style={styles.sectionHeading}>
                <AppText variant="heading">Catalog</AppText>
                <AppText color={colors.inkMuted} variant="caption">
                  91 tools across 10 categories
                </AppText>
              </View>
              <View style={styles.categoryGrid}>
                {filteredCategories.map((category) => (
                  <CategoryCard category={category} key={category.id} />
                ))}
              </View>
            </View>
          )}

          <AppText color={colors.inkSubtle} style={styles.footer} variant="caption">
            More workspaces will be added as they become available.
          </AppText>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.canvas,
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  content: {
    alignSelf: 'center',
    gap: spacing.xxxl,
    maxWidth: layout.maxWidth,
    paddingBottom: spacing.section,
    paddingHorizontal: layout.screenPadding,
    paddingTop: spacing.lg,
    width: '100%',
  },
  hero: {
    gap: spacing.md,
    maxWidth: 620,
  },
  section: {
    gap: spacing.lg,
  },
  sectionHeading: {
    alignItems: 'baseline',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
    justifyContent: 'space-between',
  },
  toolList: {
    gap: spacing.md,
  },
  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.md,
  },
  emptyState: {
    alignItems: 'center',
    gap: spacing.xs,
    paddingVertical: spacing.xxxl,
  },
  footer: {
    maxWidth: 560,
    paddingBottom: spacing.lg,
  },
});
