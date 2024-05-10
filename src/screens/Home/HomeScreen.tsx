import {View, StyleSheet, ScrollView, Text} from 'react-native';
import React from 'react';
import {Header} from './Header';
import {sizeNormalize} from '@utils';

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}>
        <Chart title="Field 1 Chart" />
        <Chart title="Field 2 Chart" />
        <Chart title="Nhiệt độ" />
      </ScrollView>
    </View>
  );
};

type ChartProps = {
  title: string;
};

const Chart = ({title}: ChartProps) => {
  return (
    <View style={styles.chartFrame}>
      <View style={styles.chartHeader}>
        <Text style={styles.chartTitle}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    padding: sizeNormalize(32),
    gap: sizeNormalize(16),
  },
  chartFrame: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#1639c4',
    height: 200,
  },
  chartHeader: {
    height: 40,
    backgroundColor: '#1639c4',
    justifyContent: 'center',
    paddingHorizontal: sizeNormalize(24),
  },
  chartTitle: {
    fontSize: 16,
    fontWeight: '400',
    color: 'white',
  },
});
