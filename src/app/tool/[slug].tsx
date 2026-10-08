import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { router, useLocalSearchParams } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppText } from '@/components/app-text';
import { BrandLockup } from '@/components/brand-lockup';
import { CatalogIcon } from '@/components/catalog-icon';
import { categoryById, findTool, tools } from '@/data/catalog';
import { colors, layout, radii, shadows, spacing } from '@/theme/tokens';

export default function ToolScreen() {
  const { slug } = useLocalSearchParams<{ slug?: string }>();
  const tool = findTool(Array.isArray(slug) ? slug[0] : slug);
  const category = tool ? categoryById.get(tool.categoryId) : undefined;

  const goBack = () => {
    if (router.canGoBack()) {
      router.back();
      return;
    }
    router.replace('/');
  };

  if (!tool || !category) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={[styles.content, styles.notFound]}>
          <AppText variant="heading">Tool not found</AppText>
          <AppText color={colors.inkMuted}>This workspace is not in the mobile catalog.</AppText>
          <Pressable accessibilityRole="button" onPress={() => router.replace('/')} style={styles.primaryButton}>
            <AppText color={colors.white} variant="label">
              Return to catalog
            </AppText>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <View style={styles.topBar}>
        <Pressable
          accessibilityLabel="Go back"
          accessibilityRole="button"
          hitSlop={8}
          onPress={goBack}
          style={({ pressed }) => [styles.backButton, pressed && styles.backButtonPressed]}>
          <MaterialCommunityIcons color={colors.ink} name="arrow-left" size={23} />
        </Pressable>
        <BrandLockup compact />
        <View style={styles.topBarSpacer} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} contentInsetAdjustmentBehavior="automatic">
        <View style={styles.content}>
          <View style={styles.hero}>
            <View style={styles.categoryLabel}>
              <CatalogIcon
                backgroundColor={category.iconBackground}
                color={category.iconColor}
                name={tool.icon}
                size={24}
              />
              <AppText color={category.iconColor} variant="label">
                {category.label}
              </AppText>
            </View>
            <AppText variant="title">{tool.label}</AppText>
            <AppText color={colors.inkMuted}>{tool.description}</AppText>
          </View>

          <View style={styles.workspace}>
            <View style={styles.workspaceHeading}>
              <View style={styles.workspaceCopy}>
                <AppText variant="heading">Choose your file</AppText>
                <AppText color={colors.inkMuted} variant="caption">
                  File selection and conversion are not available in this build yet.
                </AppText>
              </View>
              <View style={styles.foundationBadge}>
                <AppText color={colors.primary} variant="caption" style={styles.foundationBadgeText}>
                  Preview
                </AppText>
              </View>
            </View>

            <View style={styles.flow}>
              <View style={styles.flowItem}>
                <MaterialCommunityIcons color={colors.primary} name="file-upload-outline" size={20} />
                <View style={styles.flowCopy}>
                  <AppText variant="label">Input</AppText>
                  <AppText color={colors.inkMuted} variant="caption">
                    {tool.inputLabel}
                  </AppText>
                </View>
              </View>
              <MaterialCommunityIcons color={colors.inkSubtle} name="arrow-right" size={20} />
              <View style={styles.flowItem}>
                <MaterialCommunityIcons color={colors.primary} name="download-outline" size={20} />
                <View style={styles.flowCopy}>
                  <AppText variant="label">Output</AppText>
                  <AppText color={colors.inkMuted} variant="caption">
                    {tool.outputLabel}
                  </AppText>
                </View>
              </View>
            </View>

            <View accessibilityState={{ disabled: true }} style={styles.disabledButton}>
              <MaterialCommunityIcons color={colors.inkSubtle} name="file-plus-outline" size={20} />
              <AppText color={colors.inkSubtle} variant="label">
                Choose a PDF
              </AppText>
            </View>
          </View>

          <View style={styles.details}>
            <AppText variant="heading">What this workspace will do</AppText>
            <View style={styles.detailList}>
              {tool.details.map((detail) => (
                <View key={detail} style={styles.detailRow}>
                  <MaterialCommunityIcons color={colors.primary} name="check-circle-outline" size={20} />
                  <AppText color={colors.inkMuted} style={styles.detailText}>
                    {detail}
                  </AppText>
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.canvas,
    flex: 1,
  },
  topBar: {
    alignItems: 'center',
    borderBottomColor: colors.border,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: 60,
    paddingHorizontal: layout.screenPadding,
  },
  backButton: {
    alignItems: 'center',
    borderRadius: radii.round,
    height: 44,
    justifyContent: 'center',
    width: 44,
  },
  backButtonPressed: {
    backgroundColor: colors.primarySoft,
  },
  topBarSpacer: {
    width: 44,
  },
  scrollContent: {
    flexGrow: 1,
  },
  content: {
    alignSelf: 'center',
    gap: spacing.section,
    maxWidth: layout.maxWidth,
    paddingBottom: spacing.section,
    paddingHorizontal: layout.screenPadding,
    paddingTop: spacing.xxxl,
    width: '100%',
  },
  hero: {
    gap: spacing.md,
  },
  categoryLabel: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.md,
  },
  workspace: {
    ...shadows.card,
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: radii.lg,
    borderWidth: 1,
    gap: spacing.xxl,
    padding: spacing.xl,
  },
  workspaceHeading: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    gap: spacing.md,
    justifyContent: 'space-between',
  },
  workspaceCopy: {
    flex: 1,
    gap: spacing.sm,
  },
  foundationBadge: {
    backgroundColor: colors.primarySoft,
    borderRadius: radii.round,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
  },
  foundationBadgeText: {
    fontFamily: 'IBMPlexSans_600SemiBold',
  },
  flow: {
    alignItems: 'center',
    backgroundColor: colors.canvas,
    borderRadius: radii.md,
    flexDirection: 'row',
    gap: spacing.sm,
    padding: spacing.md,
  },
  flowItem: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    gap: spacing.sm,
    minWidth: 0,
  },
  flowCopy: {
    flex: 1,
    minWidth: 0,
  },
  disabledButton: {
    alignItems: 'center',
    backgroundColor: colors.disabled,
    borderRadius: radii.md,
    flexDirection: 'row',
    gap: spacing.sm,
    justifyContent: 'center',
    minHeight: 52,
    paddingHorizontal: spacing.lg,
  },
  details: {
    gap: spacing.lg,
  },
  detailList: {
    gap: spacing.md,
  },
  detailRow: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    gap: spacing.md,
  },
  detailText: {
    flex: 1,
  },
  notFound: {
    flex: 1,
    justifyContent: 'center',
  },
  primaryButton: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: colors.primary,
    borderRadius: radii.md,
    minHeight: 48,
    justifyContent: 'center',
    marginTop: spacing.md,
    paddingHorizontal: spacing.xl,
  },
});
