import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '@screens/Login';

interface Props {};
const Stack = createStackNavigator();

const PostLoginNavStack: FC<Props> = () : JSX.Element => {
  return (
    <Stack.Navigator 
      screenOptions={{
        animationEnabled: false,
        headerShown: false 
      }}
    >
      <Stack.Screen name='LoginScreen' component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default PostLoginNavStack;