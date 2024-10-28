import {NavigatorScreenParams} from '@react-navigation/native';

export type RootStackParamList = {
  bottom_bar: NavigatorScreenParams<BottomBarParamList>;
};

export type BottomBarParamList = {
  bottom_bar_home: undefined;
  bottom_bar_search: undefined;
  bottom_bar_bookmark: undefined;
  bottom_bar_profile: undefined;
};
