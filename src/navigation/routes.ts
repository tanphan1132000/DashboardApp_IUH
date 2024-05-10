import {HomeScreen, LoginScreen} from '@screens';

type ScreenComponent = {
  name: string;
  component: React.ComponentType;
};

export type RouteKeys = {
  login: ScreenComponent;
  home: ScreenComponent;
};

const LoginScreenName = 'Login';
const HomeScreenName = 'Home';

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
  };

  return ROUTES;
};

export type RootStackParamList = {
  [LoginScreenName]: undefined;
  [HomeScreenName]: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
