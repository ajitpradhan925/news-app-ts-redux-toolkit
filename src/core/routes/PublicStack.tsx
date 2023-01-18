import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import Home from '../../presentation/pages/home';

const PublicStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  )
}

export default PublicStack;
