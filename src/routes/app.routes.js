import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from '../pages/SignIn';
import ChatRoom from '../pages/ChatRoom';

const AppStack = createNativeStackNavigator();

export default function AppRoutes() {
  return (
    <AppStack.Navigator initialRouteName="ChatRoom">
        <AppStack.Screen 
            name="SignIn"
            component={SignIn}
            options={{
                title: 'Faça o Login'
            }}
        />
        
        <AppStack.Screen 
            name="ChatRoom"
            component={ChatRoom}
            options={{
                headerShown: false,
            }}
        />
    </AppStack.Navigator>
  )
}