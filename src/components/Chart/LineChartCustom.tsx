import {SvgChart, SVGRenderer} from '@wuba/react-native-echarts';
import * as echarts from 'echarts/core';
import {LineChart} from 'echarts/charts';
import {GridComponent} from 'echarts/components';
import React, {useEffect, useRef} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ChartProps} from './ChartBase';
import {sizeNormalize} from '@utils';
import {ThemeUtils} from '@themes';

type LineChartProps = {
  label: string[];
  data: number[];
} & ChartProps;

echarts.use([SVGRenderer, LineChart, GridComponent]);

export const LineChartCustom = ({label, data, title}: LineChartProps) => {
  const svgRef = useRef<any>(null);
  const chart = useRef<echarts.ECharts>();

  useEffect(() => {
    if (svgRef.current) {
      chart.current = echarts.init(svgRef.current, 'light', {
        renderer: 'svg',
        width: ThemeUtils.SCREEN_WIDTH * 0.95,
        height: ThemeUtils.SCREEN_WIDTH * 0.95,
      });
    }

    return () => chart.current?.dispose();
  }, []);

  useEffect(() => {
    const option = {
      xAxis: {
        type: 'category',
        data: label,
        axisLabel: {
          fontSize: 14,
          lineHeight: 17,
        },
      },
      yAxis: {
        type: 'value',
        position: 'left',
        alignTicks: true,
        axisLabel: {
          width: 35,
          fontSize: 14,
        },
      },
      grid: {
        // left: '0%',
        z: 0,
      },
      series: [
        {
          data: data,
          type: 'line',
        },
      ],
    };
    chart.current?.setOption(option);
  }, [data, label]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <SvgChart ref={svgRef} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // gap: sizeNormalize(16),
    borderWidth: 2,
    borderColor: ThemeUtils.primary[700],
    overflow: 'scroll',
    ...ThemeUtils.rounded_lg,
  },
  title: {
    ...ThemeUtils.text_lg_bold,
    color: ThemeUtils.neutral[0],
    paddingHorizontal: sizeNormalize(16),
    paddingVertical: sizeNormalize(8),
    backgroundColor: ThemeUtils.primary[700],
  },
});
