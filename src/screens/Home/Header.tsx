import {View, Text, StyleSheet, Pressable} from 'react-native';
import React, {useCallback} from 'react';
import {sizeNormalize} from '@utils';
import {ThemeUtils} from '@themes';
import {SignOutIcon} from '@components';
import {supabase} from '@services';
import {useNavigation} from '@react-navigation/native';

export const Header = () => {
  const {goBack} = useNavigation();
  const signOut = useCallback(() => {
    supabase.auth
      .signOut()
      .then(_ => {
        goBack();
      })
      .catch(_ => {});
  }, [goBack]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Pressable onPress={signOut} style={styles.signoutBtn}>
        <SignOutIcon color={ICON_COLOR} />
      </Pressable>
    </View>
  );
};

const ICON_COLOR = ThemeUtils.neutral[0];

const styles = StyleSheet.create({
  container: {
    backgroundColor: ThemeUtils.primary[900],
    height: sizeNormalize(56),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  title: {
    ...ThemeUtils.text_h3,
    color: ThemeUtils.neutral[0],
    paddingHorizontal: sizeNormalize(32),
  },
  signoutBtn: {
    paddingHorizontal: sizeNormalize(16),
    paddingVertical: sizeNormalize(8),
  },
});
