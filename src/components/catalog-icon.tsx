import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { StyleSheet, View } from 'react-native';

import type { CatalogIcon as CatalogIconName } from '@/data/catalog';
import { radii } from '@/theme/tokens';

interface CatalogIconProps {
  backgroundColor: string;
  color: string;
  name: CatalogIconName;
  size?: number;
}

export function CatalogIcon({ backgroundColor, color, name, size = 22 }: CatalogIconProps) {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <MaterialCommunityIcons color={color} name={name} size={size} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: radii.md,
    height: 44,
    justifyContent: 'center',
    width: 44,
  },
});
