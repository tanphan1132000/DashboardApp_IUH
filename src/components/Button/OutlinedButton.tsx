import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {sizeNormalize} from '@utils';
import {ThemeUtils} from '@themes';
import {LoadingIndicator} from '../Indicator';

type Props = {
  label: string;
  onPress: () => void;
  loading?: boolean;
};

export const OutlinedButton = ({label, onPress, loading}: Props) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.7}>
      {loading && <LoadingIndicator strokeWidth={7} />}
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: ThemeUtils.neutral[0],
    paddingVertical: sizeNormalize(8),
    paddingHorizontal: sizeNormalize(16),
    ...ThemeUtils.rounded_md,
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: ThemeUtils.primary[900],
    flexDirection: 'row',
    gap: sizeNormalize(12),
  },
  label: {
    ...ThemeUtils.text_lg_semi_bold,
    color: ThemeUtils.primary[900],
  },
});
