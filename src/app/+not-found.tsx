import { Link } from 'expo-router';
import { Pressable, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppText } from '@/components/app-text';
import { BrandLockup } from '@/components/brand-lockup';
import { colors, layout, radii, spacing } from '@/theme/tokens';

export default function NotFoundScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.content}>
        <BrandLockup />
        <View style={styles.copy}>
          <AppText variant="title">That page is not in the toolbox.</AppText>
          <AppText color={colors.inkMuted}>Return to the catalog to choose an available tool.</AppText>
        </View>
        <Link href="/" asChild>
          <Pressable accessibilityRole="button" style={styles.button}>
            <AppText color={colors.white} variant="label">
              Open the catalog
            </AppText>
          </Pressable>
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.canvas,
    flex: 1,
  },
  content: {
    alignSelf: 'center',
    flex: 1,
    gap: spacing.xxxl,
    justifyContent: 'center',
    maxWidth: layout.maxWidth,
    padding: layout.screenPadding,
    width: '100%',
  },
  copy: {
    gap: spacing.md,
  },
  button: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: colors.primary,
    borderRadius: radii.md,
    justifyContent: 'center',
    minHeight: 48,
    paddingHorizontal: spacing.xl,
  },
});
