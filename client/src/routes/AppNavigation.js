import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { iconOptions } from '../utils/iconOptions';
import HomeStack from './HomeStack';
import NotificationStack from './NotificationStack';
import SavedStack from './SavedStack';
import { SearchStack } from './SearchStack';

const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'grey',
        headerShown: false,
        tabBarStyle: { backgroundColor: 'white' },
      })}
    >
      <Tab.Screen
        name='homeTab'
        component={HomeStack}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) =>
            focused ? iconOptions.home.focused : iconOptions.home.default,
        }}
      />
      <Tab.Screen
        name='searchTab'
        component={SearchStack}
        options={{
          title: 'Search',
          tabBarIcon: ({focused}) => 
            focused ? iconOptions.search.focused : iconOptions.search.default,
        }}
      />
      <Tab.Screen
        name='savedTab'
        component={SavedStack}
        options={{
          title: 'Guardados',
          tabBarIcon: ({ focused }) =>
            focused ? iconOptions.saved.focused : iconOptions.saved.default,
        }}
      />
      <Tab.Screen
        name='notificationTab'
        component={NotificationStack}
        options={{
          title: 'Notificaciones',
          tabBarIcon: ({ focused }) =>
            focused
              ? iconOptions.notifications.focused
              : iconOptions.notifications.default,
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigation;
