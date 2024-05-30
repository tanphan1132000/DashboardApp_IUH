import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useMemo} from 'react';
import Animated, {
  useSharedValue,
  useDerivedValue,
  withTiming,
  useAnimatedStyle,
  interpolateColor,
} from 'react-native-reanimated';
import {ThemeUtils} from '@themes';
import {sizeNormalize} from '@utils';
import {Feed} from '@types';

type Props = {
  res: Feed;
};

const DURATION = 100; //ms
const OFFSET = 16;
const activeColor = ThemeUtils.primary[900];
const inActiveColor = ThemeUtils.neutral[100];

export const PumpSwitch = ({res}: Props) => {
  const translateX = useSharedValue(0);

  const stateActive = useMemo(() => {
    return Number(res.feeds[0].field4);
  }, [res]);

  const progress = useDerivedValue(() => {
    return withTiming(stateActive ? OFFSET : 0, {duration: DURATION});
  });

  const backgroundColorStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, OFFSET],
      [inActiveColor, activeColor],
    );
    return {
      backgroundColor,
    };
  });

  const translateStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: withTiming(translateX.value, {duration: DURATION})},
      ],
    };
  });

  useEffect(() => {
    if (stateActive) {
      translateX.value = OFFSET;
    } else {
      translateX.value = 0;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stateActive]);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{res.channel.field4}</Text>
      </View>
      <View>
        <Animated.View style={[styles.backdrop, backgroundColorStyle]}>
          <Animated.View style={[styles.circle, translateStyle]} />
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: sizeNormalize(16),
    borderWidth: 2,
    borderColor: ThemeUtils.primary[900],
    ...ThemeUtils.rounded_xl,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    ...ThemeUtils.text_lg_semi_bold,
    color: ThemeUtils.neutral[500],
  },
  backdrop: {
    backgroundColor: ThemeUtils.neutral[100],
    ...ThemeUtils.rounded_full,
    padding: sizeNormalize(1),
    width: sizeNormalize(40),
    transform: [
      {
        scale: 1.3,
      },
    ],
  },
  circle: {
    width: sizeNormalize(20),
    height: sizeNormalize(20),
    ...ThemeUtils.rounded_full,
    backgroundColor: ThemeUtils.neutral[0],
    transform: [{translateX: 17}],
  },
});
