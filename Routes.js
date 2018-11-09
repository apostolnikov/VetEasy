import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from './components/Shared/TabBarIcon';
import HomeScreen from './screens/HomeScreen';
import InfoScreen from './screens/InfoScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

const InfoStack = createStackNavigator({
  Info: InfoScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? 'ios-medkit'
          : 'md-medkit'
      }
    />
  ),
};

InfoStack.navigationOptions = {
  tabBarLabel: 'Info',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios'
        ? `ios-information-circle${focused ? '' : '-outline'}`
        : 'md-information-circle'
      }
    />
  ),
};

const Routes = createBottomTabNavigator({
  HomeStack,
  InfoStack,
});

export default Routes;