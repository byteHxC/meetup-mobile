import { TabNavigator } from 'react-navigation';
import Colors from '../../constants/Colors';
import {
  HomeScreen,
  NotificationsScreen,
  ProfileScreen
} from '../screens';

export default TabNavigator({
  Home: {
    screen: HomeScreen
  },
  Notifications: {
    screen: NotificationsScreen
  },
  Profile: {
    screen: ProfileScreen
  },

}, {
  swipeEnabled: true,
  animationEnabled: true,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showLabel: false,
    showIcon: true, // para visualizar el tab en android
    inactiveTintColor: Colors.$blackBlueColor,
    activeTintColor: Colors.$redColor,
    indicatorStyle: {backgroundColor: Colors.$redColor},
    pressColor: Colors.$redColor,
    style: {
      backgroundColor: Colors.$whiteColor
    }
  }
});

