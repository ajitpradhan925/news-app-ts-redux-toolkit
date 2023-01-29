import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Home,
  Account,
  Favorite,
  NewsDetail,
  Notification,
} from '@presentation/pages';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import { tabColors } from '@configs/colors';

const Tab = createBottomTabNavigator();

function NewsAppBottomTab() {
  return (
    <Tab.Navigator 
        screenOptions={{ 
            tabBarActiveTintColor: tabColors.active,
            tabBarInactiveTintColor: tabColors.inactive,
            tabBarShowLabel: false,
            headerShown: false
        }}
        >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name="home-sharp" size={size} color={color} />
          ),
        }}
        
      />

      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name="heart-sharp" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name="notifications-sharp" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name="person-sharp" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default NewsAppBottomTab;
