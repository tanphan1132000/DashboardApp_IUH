import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ChartProps} from './ChartBase';
import {ThemeUtils} from '@themes';
import {sizeNormalize} from '@utils';

export const Chart = ({title, onMounted}: ChartProps) => {
  useEffect(() => {
    onMounted();
  }, [onMounted]);

  return (
    <View style={styles.container}>
      <View style={styles.chartHeader}>
        <Text style={styles.chartTitle}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: ThemeUtils.primary[900],
    height: 200,
  },
  chartHeader: {
    height: 40,
    backgroundColor: ThemeUtils.primary[900],
    justifyContent: 'center',
    paddingHorizontal: sizeNormalize(24),
  },
  chartTitle: {
    ...ThemeUtils.text_lg,
    color: ThemeUtils.neutral[0],
  },
});
