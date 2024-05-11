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
import {firebase_auth} from '@services';
import {createUserWithEmailAndPassword} from 'firebase/auth';

export const SignUpScreen = () => {
  const {goBack} = useNavigation();
  const [loading, setLoading] = useState(false);
  const email = useRef<OutlinedTextFieldRef>(null);
  const password = useRef<OutlinedTextFieldRef>(null);

  //   async function signInWithEmail() {
  //     setLoading(true);
  //     const {error} = await supabase.auth.signInWithPassword({
  //       email: email,
  //       password: password,
  //     });

  //     if (error) {
  //       Alert.alert(error.message);
  //     }
  //     setLoading(false);
  //   }

  useEffect(() => {}, []);

  const signUpWithEmail = useCallback(async () => {
    if (!email.current?.value() || !password.current?.value()) {
      !email.current?.value() && email.current?.error();
      !password.current?.value() && password.current?.error();
      return;
    }
    setLoading(true);
    const res = await createUserWithEmailAndPassword(
      firebase_auth,
      email.current.value(),
      password.current.value(),
    );
    console.log(res);
    setLoading(false);
  }, []);

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
