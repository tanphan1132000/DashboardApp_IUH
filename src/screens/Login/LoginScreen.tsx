import {View, Text, StyleSheet, Alert} from 'react-native';
import React, {useRef, useState} from 'react';
import {
  OutlinedButton,
  OutlinedTextField,
  OutlinedTextFieldRef,
  PrimaryButton,
} from '@components';
import {sizeNormalize} from '@utils';
import {useNavigation} from '@react-navigation/native';
import {ThemeUtils} from '@themes';
import {supabase} from '@services';

export const LoginScreen = () => {
  const {navigate} = useNavigation();
  const [loading, setLoading] = useState(false);
  const email = useRef<OutlinedTextFieldRef>(null);
  const password = useRef<OutlinedTextFieldRef>(null);

  async function signInWithEmail() {
    setLoading(true);
    const {error} = await supabase.auth.signInWithPassword({
      email: email.current?.value() as string,
      password: password.current?.value() as string,
    });

    if (error) {
      let message = 'Lỗi';
      if (error.status === 400) {
        message = 'Tài khoản không đúng';
      }
      Alert.alert(message);
    } else {
      navigate('Home');
    }
    setLoading(false);
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleCont}>
        <Text style={styles.title}>DASHBOARD</Text>
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
          <PrimaryButton
            label="Đăng nhập"
            onPress={signInWithEmail}
            loading={loading}
          />
          <OutlinedButton
            label="Đăng ký"
            onPress={() => navigate('SignUp')}
            loading={false}
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
