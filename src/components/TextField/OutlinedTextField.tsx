import {View, Text, TextInput, TextInputProps, StyleSheet} from 'react-native';
import React from 'react';
import {sizeNormalize} from '@utils';

type Props = {
  label: string;
} & TextInputProps;

export const OutlinedTextField = ({
  label,
  placeholder,
  secureTextEntry,
}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={'#adadad'}
        secureTextEntry={secureTextEntry}
        underlineColorAndroid={undefined}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: sizeNormalize(4),
  },
  input: {
    borderWidth: 1,
    borderColor: '#B4B4B8',
    borderRadius: 8,
    paddingHorizontal: sizeNormalize(16),
    fontSize: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
  },
});
