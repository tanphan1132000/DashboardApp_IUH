import {View, Text, TextInput, TextInputProps, StyleSheet} from 'react-native';
import React, {
  Ref,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import {sizeNormalize} from '@utils';
import {ThemeUtils} from '@themes';

type Props = {
  label: string;
  _ref?: Ref<OutlinedTextFieldRef>;
} & TextInputProps;

export type OutlinedTextFieldRef = {
  error: () => void;
  value: () => string;
  reset: () => void;
};

export const OutlinedTextField = ({
  label,
  placeholder,
  secureTextEntry,
  _ref,
}: Props) => {
  const ref = useRef<TextInput>(null);
  const [error, setError] = useState(false);
  const valueInput = useRef<string>('');

  const onChange = useCallback((t: string) => {
    valueInput.current = t;
  }, []);

  const onFocus = useCallback(() => {
    setError(false);
  }, []);

  useImperativeHandle(
    _ref,
    () => ({
      error() {
        setError(true);
      },
      value() {
        return valueInput.current;
      },
      reset() {
        ref.current?.clear();
      },
    }),
    [],
  );

  return (
    <View style={styles.container}>
      <Text style={[styles.label, error ? styles.labelError : undefined]}>
        {label}
      </Text>
      <TextInput
        ref={ref}
        style={[styles.input, error ? styles.inputError : undefined]}
        placeholder={placeholder}
        placeholderTextColor={
          error ? ThemeUtils.red[500] : ThemeUtils.neutral[200]
        }
        secureTextEntry={secureTextEntry}
        underlineColorAndroid={undefined}
        onChangeText={onChange}
        onFocus={onFocus}
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
    borderWidth: 1.5,
    borderColor: ThemeUtils.neutral[200],
    ...ThemeUtils.rounded_md,
    paddingHorizontal: sizeNormalize(16),
    ...ThemeUtils.text_md,
  },
  inputError: {
    borderColor: ThemeUtils.red[900],
  },
  label: {
    ...ThemeUtils.text_md,
    ...ThemeUtils.font_medium,
    color: ThemeUtils.neutral[500],
  },
  labelError: {
    color: ThemeUtils.red[900],
  },
});
