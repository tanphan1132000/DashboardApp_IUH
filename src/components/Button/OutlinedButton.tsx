import {StyleSheet} from 'react-native';
import React from 'react';
import {sizeNormalize} from '@utils';
import {ThemeUtils} from '@themes';
import {BaseButton} from './BaseButton';

type Props = {
  label: string;
  onPress: () => void;
  loading: boolean;
};

export const OutlinedButton = ({label, onPress, loading}: Props) => {
  return (
    <BaseButton
      label={label}
      onPress={onPress}
      buttonStyle={styles.container}
      labelStyle={styles.label}
      loading={loading}
      indicatorColor={ThemeUtils.primary[900]}
    />
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
