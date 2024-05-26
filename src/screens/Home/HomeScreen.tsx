import {View, StyleSheet, ScrollView, Text} from 'react-native';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {Header} from './Header';
import {formatTime, sizeNormalize} from '@utils';
import {getFeed} from '@services';
import {AxiosError} from 'axios';
import {LineChartCustom, LoadingIndicator} from '@components';
import {TIMER_CALL_API} from '@constants';
import {Feed} from '@types';
import {ThemeUtils} from '@themes';

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}>
        <ChartContainer />
      </ScrollView>
    </View>
  );
};

const ChartContainer = () => {
  const [response, setRespone] = useState<Feed>();

  const fetchFeed = useCallback(async () => {
    getFeed()
      .then(res => {
        setRespone(res);
      })
      .catch((err: AxiosError) => {
        console.log('ERROR', err.response);
      });
  }, []);

  const interval_id = useMemo(
    () => setInterval(fetchFeed, TIMER_CALL_API),
    [fetchFeed],
  );

  useEffect(() => {
    return () => clearInterval(interval_id);
  }, [interval_id]);

  return (
    <ScrollView
      contentContainerStyle={styles.scrollViewContent}
      showsVerticalScrollIndicator={false}>
      {response ? (
        <>
          <TemperatureChart res={response} />
          <HumidityChart res={response} />
        </>
      ) : (
        <EmptyResponse />
      )}
    </ScrollView>
  );
};

const TemperatureChart = ({res}: {res: Feed}) => {
  const [field, setField] = useState('');
  const [data, setData] = useState<number[]>([]);
  const [timeCreated, setTimeCreated] = useState<string[]>([]);

  useEffect(() => {
    const newData = res.feeds.map(d => parseFloat(d.field1));
    const times = res.feeds.map(d => formatTime(d.created_at));
    setTimeCreated(times);
    setData(newData);
    setField(res.channel.field1);
  }, [res]);

  return <LineChartCustom label={timeCreated} data={data} title={field} />;
};

const HumidityChart = ({res}: {res: Feed}) => {
  const [field, setField] = useState('');
  const [data, setData] = useState<number[]>([]);
  const [timeCreated, setTimeCreated] = useState<string[]>([]);

  useEffect(() => {
    const newData = res.feeds.map(d => parseFloat(d.field2));
    const times = res.feeds.map(d => formatTime(d.created_at));
    setTimeCreated(times);
    setData(newData);
    setField(res.channel.field2);
  }, [res]);

  return <LineChartCustom label={timeCreated} data={data} title={field} />;
};

const EmptyResponse = () => {
  return (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyLabel}>Không có dữ liệu</Text>
      <View>
        <LoadingIndicator strokeWidth={4} size="md" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    padding: sizeNormalize(16),
    gap: sizeNormalize(16),
  },
  emptyContainer: {
    gap: sizeNormalize(16),
    borderWidth: 2,
    borderColor: ThemeUtils.primary[700],
    alignItems: 'center',
    justifyContent: 'center',
    height: ThemeUtils.SCREEN_WIDTH,
    ...ThemeUtils.rounded_lg,
  },
  emptyLabel: {
    ...ThemeUtils.text_lg_semi_bold,
    color: ThemeUtils.neutral[500],
  },
});
