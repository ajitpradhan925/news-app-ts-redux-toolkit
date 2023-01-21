import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {Intro, NewsDetail, Home} from '../../presentation/pages';
import NewsAppBottomTab from './bottom-navigation';

const MainStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="intro"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="news-detail" component={NewsDetail} />
      <Stack.Screen name="intro" component={Intro} />
      <Stack.Screen name="home" component={NewsAppBottomTab} />
    </Stack.Navigator>
  );
};

export default MainStack;
