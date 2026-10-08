import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { router } from 'expo-router';
import { useMemo, useState, type ComponentProps } from 'react';
import { Pressable, SectionList, StyleSheet, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppText } from '@/components/app-text';
import { BrandLockup } from '@/components/brand-lockup';
import { menuItems, type MenuSubItem } from '@/data/full-catalog';
import { colors, fonts, layout, radii, spacing } from '@/theme/tokens';

type IconName = ComponentProps<typeof MaterialCommunityIcons>['name'];

const iconNames: Record<string, IconName> = {
  AlignLeft: 'format-align-left',
  Archive: 'archive-outline',
  Code: 'code-tags',
  Copy: 'content-copy',
  Crop: 'crop',
  Download: 'download-outline',
  Eye: 'eye-outline',
  File: 'file-outline',
  FileText: 'file-document-outline',
  Film: 'filmstrip',
  Folder: 'folder-outline',
  Image: 'image-outline',
  Layers: 'layers-outline',
  LayoutGrid: 'view-grid-outline',
  LinkIcon: 'link-variant',
  Merge: 'merge',
  Music: 'music-note-outline',
  Pen: 'draw-pen',
  Percent: 'percent-outline',
  QrCode: 'qrcode',
  RotateCw: 'rotate-right',
  Scissors: 'content-cut',
  Search: 'magnify',
  Share2: 'share-variant-outline',
  Shield: 'shield-outline',
  Sparkles: 'auto-fix',
  Split: 'call-split',
  Type: 'format-text',
  Video: 'video-outline',
  Wand2: 'magic-staff',
  Zap: 'lightning-bolt-outline',
};

const categoryTones: Record<string, { background: string; foreground: string }> = {
  'PDF Tools': { background: '#FFF0EB', foreground: '#C6533B' },
  'Image Tools': { background: '#E9F7F2', foreground: '#21866F' },
  'Video Tools': { background: '#F4ECFA', foreground: '#7B4A9E' },
  'Audio Tools': { background: '#F4ECFA', foreground: '#7B4A9E' },
  'Document Tools': { background: '#EAF1FB', foreground: '#416AA8' },
  'URL & QR Tools': { background: '#FFF6DC', foreground: '#987112' },
  'Text Tools': { background: '#FFF6DC', foreground: '#987112' },
  'File Tools': { background: '#FFF6DC', foreground: '#987112' },
  'Archive Tools': { background: '#FFF6DC', foreground: '#987112' },
  'AI Tools': { background: '#EEF0FF', foreground: '#555AC5' },
};

function slugFromUrl(url: string) {
  return url.split('/').filter(Boolean).at(-1) ?? '';
}

export default function HomeScreen() {
  const [query, setQuery] = useState('');
  const normalizedQuery = query.trim().toLowerCase();

  const sections = useMemo(
    () =>
      menuItems
        .map((category) => ({
          title: category.label,
          data: category.subItems.filter((tool) => {
            if (!normalizedQuery) return true;
            return `${category.label} ${tool.label} ${tool.description} ${tool.keywords.join(' ')}`
              .toLowerCase()
              .includes(normalizedQuery);
          }),
        }))
        .filter((section) => section.data.length > 0),
    [normalizedQuery],
  );

  const resultCount = sections.reduce((total, section) => total + section.data.length, 0);

  const openTool = (tool: MenuSubItem) => {
    if (tool.comingSoon) return;
    router.push({ pathname: '/tool/[slug]', params: { slug: slugFromUrl(tool.url) } });
  };

  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <View style={styles.header}>
        <BrandLockup />

        <View style={styles.titleRow}>
          <AppText variant="heading">All tools</AppText>
          <AppText color={colors.inkMuted} variant="caption">
            {resultCount} {resultCount === 1 ? 'tool' : 'tools'}
          </AppText>
        </View>

        <View style={styles.search}>
          <MaterialCommunityIcons color={colors.inkMuted} name="magnify" size={20} />
          <TextInput
            accessibilityLabel="Search Dutility tools"
            autoCapitalize="none"
            autoCorrect={false}
            clearButtonMode="while-editing"
            onChangeText={setQuery}
            placeholder="Search tools, formats, or tasks"
            placeholderTextColor={colors.inkSubtle}
            returnKeyType="search"
            style={styles.searchInput}
            value={query}
          />
        </View>
      </View>

      <SectionList
        contentContainerStyle={styles.listContent}
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="handled"
        ListEmptyComponent={
          <View style={styles.emptyState}>
            <AppText variant="bodyMedium">No matching tools</AppText>
            <AppText color={colors.inkMuted} variant="caption">
              Try another file type or task.
            </AppText>
          </View>
        }
        renderItem={({ item, section }) => {
          const available = !item.comingSoon;
          const tone = categoryTones[section.title] ?? {
            background: colors.primarySoft,
            foreground: colors.primary,
          };

          return (
            <Pressable
              accessibilityHint={available ? `Opens the ${item.label} tool` : 'This tool is coming soon'}
              accessibilityRole="button"
              accessibilityState={{ disabled: !available }}
              disabled={!available}
              onPress={() => openTool(item)}
              style={({ pressed }) => [styles.toolRow, pressed && styles.toolRowPressed]}>
              <View style={[styles.toolIcon, { backgroundColor: tone.background }]}>
                <MaterialCommunityIcons
                  color={tone.foreground}
                  name={iconNames[item.icon] ?? 'file-outline'}
                  size={18}
                />
              </View>
              <AppText
                color={available ? colors.ink : colors.inkMuted}
                numberOfLines={1}
                style={styles.toolLabel}
                variant="label">
                {item.label}
              </AppText>
              {available ? (
                <MaterialCommunityIcons color={colors.primary} name="chevron-right" size={20} />
              ) : (
                <View style={styles.soonBadge}>
                  <AppText color={colors.inkMuted} variant="caption">
                    Soon
                  </AppText>
                </View>
              )}
            </Pressable>
          );
        }}
        renderSectionHeader={({ section }) => (
          <View style={styles.sectionHeader}>
            <AppText variant="bodyMedium">{section.title}</AppText>
            <AppText color={colors.inkMuted} variant="caption">
              {section.data.length}
            </AppText>
          </View>
        )}
        sections={sections}
        stickySectionHeadersEnabled
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.canvas,
    flex: 1,
  },
  header: {
    alignSelf: 'center',
    gap: spacing.xl,
    maxWidth: layout.maxWidth,
    paddingBottom: spacing.lg,
    paddingHorizontal: layout.screenPadding,
    paddingTop: spacing.lg,
    width: '100%',
  },
  titleRow: {
    alignItems: 'baseline',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  search: {
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderColor: colors.borderStrong,
    borderRadius: radii.md,
    borderWidth: 1,
    flexDirection: 'row',
    gap: spacing.sm,
    minHeight: 50,
    paddingHorizontal: spacing.md,
  },
  searchInput: {
    color: colors.ink,
    flex: 1,
    fontFamily: fonts.regular,
    fontSize: 15,
    minHeight: 48,
    paddingVertical: 0,
  },
  listContent: {
    alignSelf: 'center',
    maxWidth: layout.maxWidth,
    paddingBottom: spacing.section,
    paddingHorizontal: layout.screenPadding,
    width: '100%',
  },
  sectionHeader: {
    alignItems: 'center',
    backgroundColor: colors.canvas,
    borderBottomColor: colors.border,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: 48,
    paddingTop: spacing.sm,
  },
  toolRow: {
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderBottomColor: colors.border,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    gap: spacing.md,
    minHeight: 60,
    paddingHorizontal: spacing.md,
  },
  toolRowPressed: {
    backgroundColor: colors.primarySoft,
  },
  toolIcon: {
    alignItems: 'center',
    borderRadius: radii.sm,
    height: 36,
    justifyContent: 'center',
    width: 36,
  },
  toolLabel: {
    flex: 1,
  },
  soonBadge: {
    backgroundColor: colors.disabled,
    borderRadius: radii.round,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
  },
  emptyState: {
    alignItems: 'center',
    gap: spacing.xs,
    paddingVertical: spacing.section,
  },
});
