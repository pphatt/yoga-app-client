import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomBarParamList, RootStackParamList} from './types';
import BookmarkScreen from '../screens/bookmark';
import ProfileScreen from '../screens/profile';
import SearchScreen from '../screens/search';
import {TouchableOpacity} from 'react-native';
import {MCIIcon, MIIcon} from '../components/icons';
import {TouchableRipple, useTheme} from 'react-native-paper';
import {CommonActions} from '@react-navigation/native';

import BottomNavigation from '../components/core/bottom-navigation/BottomNavigation';

import color from 'color';

const AppStack = createNativeStackNavigator<RootStackParamList>();
const BottomBar = createBottomTabNavigator<BottomBarParamList>();

function BottomBarTab() {
  const theme = useTheme();

  return (
    <BottomBar.Navigator
      initialRouteName="bottom_bar_home"
      screenOptions={() => ({
        headerShown: false,
        tabBarStyle: {
          height: 60,
        },
        tabBarLabelStyle: {
          marginBottom: 5,
        },
        tabBarIconStyle: {
          marginTop: 5,
        },
      })}
      tabBar={({navigation, state, descriptors, insets}) => (
        <BottomNavigation.Bar
          theme={theme}
          navigationState={state}
          safeAreaInsets={insets}
          style={{
            backgroundColor: theme.colors.surfaceVariant,
          }}
          onTabPress={({route, preventDefault}) => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (event.defaultPrevented) {
              preventDefault();
            } else {
              navigation.dispatch({
                ...CommonActions.navigate(route.name, route.params),
                target: state.key,
              });
            }
          }}
          renderIcon={({route, focused, color: iconColor}) => {
            const {options} = descriptors[route.key];

            if (options.tabBarIcon) {
              return (
                <TouchableRipple
                  rippleColor={color(theme.colors.surfaceVariant)
                    .alpha(0.12)
                    .rgb()
                    .string()}>
                  {options.tabBarIcon({focused, color: iconColor, size: 24})}
                </TouchableRipple>
              );
            }

            return null;
          }}
          getLabelText={({route}) => {
            const {options} = descriptors[route.key];

            const label = (
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : (route as unknown as {title: string}).title
            ) as string;

            return label;
          }}
        />
      )}>
      <BottomBar.Screen
        name="bottom_bar_home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarButton: props => <TouchableOpacity {...props} />,
          tabBarIcon: ({focused, size, color}) => {
            return (
              <MCIIcon
                size={size}
                name={focused ? 'home-variant' : 'home-variant-outline'}
                color={color}
              />
            );
          },
        }}
      />
      <BottomBar.Screen
        name="bottom_bar_search"
        component={SearchScreen}
        options={{
          title: 'Search',
          tabBarButton: props => <TouchableOpacity {...props} />,
          tabBarIcon: ({focused, size, color}) => {
            return (
              <MIIcon
                size={size}
                name={focused ? 'search' : 'search'}
                color={color}
              />
            );
          },
        }}
      />
      <BottomBar.Screen
        name="bottom_bar_bookmark"
        component={BookmarkScreen}
        options={{
          title: 'Bookmark',
          tabBarButton: props => <TouchableOpacity {...props} />,
          tabBarIcon: ({focused, size, color}) => {
            return (
              <MCIIcon
                size={size}
                name={
                  focused ? 'bookmark-multiple' : 'bookmark-multiple-outline'
                }
                color={color}
              />
            );
          },
        }}
      />
      <BottomBar.Screen
        name="bottom_bar_profile"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          tabBarButton: props => <TouchableOpacity {...props} />,
          tabBarIcon: ({focused, size, color}) => {
            return (
              <MCIIcon
                size={size}
                name={focused ? 'account-circle' : 'account-circle-outline'}
                color={color}
              />
            );
          },
        }}
      />
    </BottomBar.Navigator>
  );
}

export default function AppNavigation() {
  return (
    <AppStack.Navigator
      initialRouteName="bottom_bar"
      screenOptions={() => ({
        headerShown: false,
      })}>
      <AppStack.Screen name="bottom_bar" component={BottomBarTab} />
    </AppStack.Navigator>
  );
}
