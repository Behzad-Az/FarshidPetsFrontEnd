import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import LoginScreen from '@screens/Login';
import {
  LoginScreen,
  RegisterScreen
} from '@screens/index'

interface Props {};
const Stack = createStackNavigator();

const PreLoginNavStack: FC<Props> = () : JSX.Element => {
  return (
    <Stack.Navigator 
      screenOptions={{
        animationEnabled: false,
        headerShown: false 
      }}
    >
      <Stack.Screen name='LoginScreen' component={LoginScreen} />
      <Stack.Screen name='RegisterScreen' component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default PreLoginNavStack;