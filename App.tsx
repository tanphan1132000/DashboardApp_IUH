import React from 'react';
import {RootNavigator} from '@navigation';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

function App(): JSX.Element {
  return (
    <>
      <StatusBar animated={true} barStyle={'dark-content'} />
      <GestureHandlerRootView style={{flex: 1}}>
        <SafeAreaProvider>
          <RootNavigator />
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </>
  );
}

export default App;
