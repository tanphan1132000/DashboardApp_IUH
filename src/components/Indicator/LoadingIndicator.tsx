import {ThemeUtils} from '@themes';
import {sizeNormalize} from '@utils';
import React, {useEffect, useMemo} from 'react';
import {ColorValue, StyleSheet, View} from 'react-native';
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedProps,
  withRepeat,
} from 'react-native-reanimated';

import Svg, {Circle} from 'react-native-svg';

const STROKE_COLOR = ThemeUtils.primary[900];
const CIRCLE_LENGTH = 100; // 2PI*R
const R = CIRCLE_LENGTH / (2 * Math.PI);

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

type LoadingIndicatorProps = {
  size?: 'sm' | 'md';
  strokeColor?: ColorValue;
  strokeWidth?: number;
  duration?: number;
};

export const LoadingIndicator = ({
  size = 'sm',
  strokeColor = STROKE_COLOR,
  strokeWidth = 5,
  duration = 2000,
}: LoadingIndicatorProps) => {
  const progress = useSharedValue(0);

  const animatedProps = useAnimatedProps(() => ({
    strokeDashoffset: CIRCLE_LENGTH * (1 - progress.value),
  }));

  const {width, height} = useMemo(
    () => ({
      width: size === 'sm' ? 25 : 50,
      height: size === 'sm' ? 25 : 50,
    }),
    [size],
  );

  useEffect(() => {
    progress.value = withRepeat(withTiming(2, {duration: duration}), 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View
      style={[
        styles.container,
        {width: sizeNormalize(width), height: sizeNormalize(height)},
      ]}>
      <Svg height="100%" width="100%" viewBox="0 0 45 45">
        <AnimatedCircle
          cx={'50%'}
          cy={'50%'}
          r={R}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeDasharray={CIRCLE_LENGTH}
          animatedProps={animatedProps}
          strokeLinecap={'round'}
          fillOpacity={0}
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: sizeNormalize(50),
    height: sizeNormalize(50),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
