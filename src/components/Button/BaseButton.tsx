import {
  Text,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
  ColorValue,
} from 'react-native';
import React from 'react';
import {LoadingIndicator} from '../Indicator';
import {ThemeUtils} from '@themes';

export type BaseButtonProps = {
  label: string;
  onPress: () => void;
  loading: boolean;
  buttonStyle?: ViewStyle;
  labelStyle?: TextStyle;
  indicatorColor?: ColorValue;
};

export const BaseButton = ({
  label,
  onPress,
  buttonStyle,
  labelStyle,
  loading,
  indicatorColor = ThemeUtils.neutral[0],
}: BaseButtonProps) => {
  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress} activeOpacity={0.7}>
      {loading && (
        <LoadingIndicator strokeColor={indicatorColor} strokeWidth={7} />
      )}
      <Text style={labelStyle}>{label}</Text>
    </TouchableOpacity>
  );
};
