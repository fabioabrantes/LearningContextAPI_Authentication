import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack'

import {Login} from '../screens/Login';
import {RegisterUser} from '../screens/RegisterUser';

const {Navigator,Screen} = createNativeStackNavigator();

export function AuthRoutes(){
  return (
    
      <Navigator screenOptions={{headerShown:false}}>
        <Screen 
          name='Login' 
          component={Login}
        />
        <Screen 
          name='RegisterUser' 
          component={RegisterUser}
        />
       
      </Navigator>
    
  );
}