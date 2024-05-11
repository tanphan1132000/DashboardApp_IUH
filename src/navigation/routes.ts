import {HomeScreen, LoginScreen, SignUpScreen} from '@screens';

type ScreenComponent = {
  name: string;
  component: React.ComponentType;
};

export type RouteKeys = {
  login: ScreenComponent;
  home: ScreenComponent;
  signup: ScreenComponent;
};

const LoginScreenName = 'Login';
const HomeScreenName = 'Home';
const SignUpScreenName = 'SignUp';

export const useRoutes = () => {
  const ROUTES: RouteKeys = {
    login: {
      name: LoginScreenName,
      component: LoginScreen,
    },
    home: {
      name: HomeScreenName,
      component: HomeScreen,
    },
    signup: {
      name: SignUpScreenName,
      component: SignUpScreen,
    },
  };

  return ROUTES;
};

export type RootStackParamList = {
  [LoginScreenName]: undefined;
  [HomeScreenName]: undefined;
  [SignUpScreenName]: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
