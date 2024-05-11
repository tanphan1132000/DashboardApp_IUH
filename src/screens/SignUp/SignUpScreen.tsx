import {View, Text, StyleSheet, Alert} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  OutlinedTextField,
  OutlinedButton,
  OutlinedTextFieldRef,
} from '@components';
import {useNavigation} from '@react-navigation/native';
import {ThemeUtils} from '@themes';
import {sizeNormalize} from '@utils';
import {supabase} from '@services';

export const SignUpScreen = () => {
  const {goBack, setOptions} = useNavigation();
  const [loading, setLoading] = useState(false);
  const email = useRef<OutlinedTextFieldRef>(null);
  const password = useRef<OutlinedTextFieldRef>(null);

  useEffect(() => {
    setOptions({headerShown: true, title: 'Đăng nhập'});
  }, [setOptions]);

  const signUpWithEmail = useCallback(async () => {
    if (!email.current?.value() || !password.current?.value()) {
      !email.current?.value() && email.current?.error();
      !password.current?.value() && password.current?.error();
      return;
    }
    setLoading(true);
    const {
      data: {session},
      error,
    } = await supabase.auth.signUp({
      email: email.current.value() as string,
      password: password.current.value() as string,
    });

    if (error) {
      Alert.alert(error.message);
    }
    if (!session) {
      Alert.alert('Vui lòng kiểm tra email để xác thực!', '', [
        {
          text: 'OK',
          style: 'default',
          onPress: goBack,
        },
      ]);
    }
    setLoading(false);
  }, [goBack]);

  return (
    <View style={styles.container}>
      <View style={styles.titleCont}>
        <Text style={styles.title}>Đăng ký</Text>
      </View>
      <View style={styles.inputCont}>
        <OutlinedTextField
          _ref={email}
          label="Email"
          placeholder="Nhập email"
        />
        <OutlinedTextField
          _ref={password}
          label="Mật khẩu"
          placeholder="Nhập mật khẩu"
          secureTextEntry={true}
        />
        <View style={styles.loginBtnCont}>
          <OutlinedButton
            label="Đăng ký"
            onPress={signUpWithEmail}
            loading={loading}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    gap: sizeNormalize(32),
    paddingVertical: sizeNormalize(128),
  },
  titleCont: {},
  title: {
    ...ThemeUtils.text_h2,
    color: ThemeUtils.primary[900],
    textTransform: 'uppercase',
  },
  inputCont: {
    width: '100%',
    paddingHorizontal: sizeNormalize(32),
    gap: sizeNormalize(16),
  },
  loginBtnCont: {
    flexDirection: 'row',
    gap: sizeNormalize(16),
    paddingVertical: sizeNormalize(8),
    justifyContent: 'center',
  },
});
