import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { StyleSheet, TextInput, View } from 'react-native';

import { colors, fonts, layout, radii, spacing } from '@/theme/tokens';

interface SearchFieldProps {
  onChangeText: (value: string) => void;
  value: string;
}

export function SearchField({ onChangeText, value }: SearchFieldProps) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons color={colors.inkMuted} name="magnify" size={21} />
      <TextInput
        accessibilityLabel="Search Dutility tools and categories"
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="while-editing"
        onChangeText={onChangeText}
        placeholder="Search tools or categories"
        placeholderTextColor={colors.inkSubtle}
        returnKeyType="search"
        style={styles.input}
        value={value}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderColor: colors.borderStrong,
    borderRadius: radii.md,
    borderWidth: 1,
    flexDirection: 'row',
    gap: spacing.md,
    minHeight: 52,
    paddingHorizontal: spacing.lg,
  },
  input: {
    color: colors.ink,
    flex: 1,
    fontFamily: fonts.regular,
    fontSize: 16,
    minHeight: layout.minTouchTarget,
    paddingVertical: 0,
  },
});
