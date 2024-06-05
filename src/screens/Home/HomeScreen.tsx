import {View, StyleSheet, ScrollView, Text} from 'react-native';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {Header} from './Header';
import {sizeNormalize} from '@utils';
import {getFeed} from '@services';
import {AxiosError} from 'axios';
import {LoadingIndicator} from '@components';
import {TIMER_CALL_API} from '@constants';
import {Feed} from '@types';
import {ThemeUtils} from '@themes';
import {PumpSwitch} from './PumpSwitch';

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}>
        <Body />
      </ScrollView>
    </View>
  );
};

const Body = () => {
  const [response, setRespone] = useState<Feed>();

  const fetchFeed = useCallback(async () => {
    getFeed()
      .then(res => {
        console.log(res);
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
          <EnviromentalParameters res={response} />
          <PumpSwitch res={response} />
        </>
      ) : (
        <EmptyResponse />
      )}
    </ScrollView>
  );
};

const EnviromentalParameters = ({res}: {res: Feed}) => {
  const tempStyle = useMemo(() => {
    const v = Number(res.feeds[0].field1);
    if (v < 24) {
      return styles.warningLabel;
    } else if (v > 30) {
      return styles.dangerLabel;
    }
    return undefined;
  }, [res]);

  const humidityStyle = useMemo(() => {
    const v = Number(res.feeds[0].field2);
    if (v < 50) {
      return styles.dangerLabel;
    } else if (v > 60) {
      return styles.warningLabel;
    }
    return undefined;
  }, [res]);

  const soilMoistureStyle = useMemo(() => {
    const v = Number(res.feeds[0].field3);
    if (v < 45) {
      return styles.dangerLabel;
    } else if (v > 60) {
      return styles.warningLabel;
    }
    return undefined;
  }, [res]);

  return (
    <View style={styles.envCntr}>
      <View style={styles.itemCtnr}>
        <Text style={styles.leadingLabel}>{res.channel.field1}</Text>
        <Text style={[styles.trailingLabel, tempStyle]}>
          {`${res.feeds[0].field1?.trim() || '-'} °C`}
        </Text>
      </View>
      <View style={styles.seperator} />
      <View style={styles.itemCtnr}>
        <Text style={styles.leadingLabel}>{res.channel.field2}</Text>
        <Text style={[styles.trailingLabel, humidityStyle]}>
          {`${res.feeds[0].field2?.trim() || '-'} %`}
        </Text>
      </View>
      <View style={styles.seperator} />
      <View style={styles.itemCtnr}>
        <Text style={styles.leadingLabel}>{res.channel.field3}</Text>
        <Text style={[styles.trailingLabel, soilMoistureStyle]}>
          {`${res.feeds[0].field3?.trim() || '-'} %`}
        </Text>
      </View>
    </View>
  );
};

const EmptyResponse = () => {
  return (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyLabel}>Không có dữ liệu</Text>
      <View>
        <LoadingIndicator strokeWidth={7} size="sm" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ThemeUtils.neutral[0],
  },
  scrollViewContent: {
    padding: sizeNormalize(8),
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
  envCntr: {
    borderWidth: 2,
    borderColor: ThemeUtils.primary[700],
    ...ThemeUtils.rounded_lg,
    padding: sizeNormalize(16),
    gap: sizeNormalize(16),
  },
  itemCtnr: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leadingLabel: {
    ...ThemeUtils.text_lg_semi_bold,
    color: ThemeUtils.neutral[500],
  },
  trailingLabel: {
    ...ThemeUtils.text_lg_bold,
    color: ThemeUtils.green[900],
  },
  warningLabel: {
    color: ThemeUtils.yellow[500],
  },
  dangerLabel: {
    color: ThemeUtils.red[700],
  },
  seperator: {
    height: sizeNormalize(2),
    backgroundColor: ThemeUtils.neutral[10],
    ...ThemeUtils.rounded_full,
  },
});
