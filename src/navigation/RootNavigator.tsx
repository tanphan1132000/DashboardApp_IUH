import React, {useRef} from 'react';
import {
  NavigationContainer,
  StackActions,
  createNavigationContainerRef,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList, useRoutes} from './routes';

export const rootNavigatorRef = createNavigationContainerRef();

export function rootPush<RouteName extends keyof RootStackParamList>(
  name: RouteName,
  params?: RootStackParamList[RouteName],
) {
  if (rootNavigatorRef.isReady()) {
    rootNavigatorRef.dispatch(StackActions.push(name, params));
  }
}

export function rootReplace<RouteName extends keyof RootStackParamList>(
  name: RouteName,
  params?: RootStackParamList[RouteName],
) {
  if (rootNavigatorRef.isReady()) {
    rootNavigatorRef.dispatch(StackActions.replace(name, params));
  }
}

const Stack = createStackNavigator();

export const RootNavigator = () => {
  const ROUTES = useRoutes();

  const routeNameRef = useRef<string>();

  return (
    <NavigationContainer
      ref={rootNavigatorRef}
      onReady={() => {
        routeNameRef.current = rootNavigatorRef.getCurrentRoute()?.name;
      }}
      onStateChange={() => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = rootNavigatorRef.getCurrentRoute()?.name;
        if (previousRouteName !== currentRouteName) {
          // logScreenName(currentRouteName);
        }
        routeNameRef.current = currentRouteName;
      }}
      //* END LOG SCREEN VIEW */
    >
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name={ROUTES.login.name}
          component={ROUTES.login.component}
        />
        <Stack.Screen
          name={ROUTES.home.name}
          component={ROUTES.home.component}
        />
        <Stack.Screen
          name={ROUTES.signup.name}
          component={ROUTES.signup.component}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
