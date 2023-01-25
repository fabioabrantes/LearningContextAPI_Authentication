import React from 'react';
import Icon from '@expo/vector-icons/MaterialIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { useTheme } from 'styled-components';

import {Home} from '../screens/Home';
import {RegisterProduct} from '../screens/RegisterProduct';


const {Navigator,Screen} = createBottomTabNavigator();

export function RoutesPrivadas(){
  const theme = useTheme();
  
  return (
    
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: 'yellow',
        tabBarInactiveTintColor: 'white',
        tabBarShowLabel: true,
        tabBarLabelStyle: {fontSize: 20,fontWeight:'700'},
        tabBarStyle: {backgroundColor: theme.colors.secondary},
        headerShown:false,
        }}
        initialRouteName="Home"
    >
      
      <Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          tabBarIcon: ({size, color}) => (
            <Icon name="list" size={size} color={color} />
          ),
        }}
      />
      
      <Screen
        name="RegisterProduct"
        component={RegisterProduct}
        options={{
          title: 'Cadastro Produto',
          tabBarIcon: ({size, color}) => (
            <Icon name="add" size={size} color={color} />
          ),
        }}
      />
    </Navigator>
    
  );
}