import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {OutlinedButton, OutlinedTextField, PrimaryButton} from '@components';
import {sizeNormalize} from '@utils';
import {useNavigation} from '@react-navigation/native';
import {ThemeUtils} from '@themes';

export const LoginScreen = () => {
  const {navigate} = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.titleCont}>
        <Text style={styles.title}>DASHBOARD</Text>
      </View>
      <View style={styles.inputCont}>
        <OutlinedTextField label="Tài khoản" placeholder="Nhập tài khoản" />
        <OutlinedTextField
          label="Mật khẩu"
          placeholder="Nhập mật khẩu"
          secureTextEntry={true}
        />
        <View style={styles.loginBtnCont}>
          <PrimaryButton label="Đăng nhập" onPress={() => navigate('Home')} />
          <OutlinedButton label="Đăng ký" onPress={() => navigate('SignUp')} />
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
