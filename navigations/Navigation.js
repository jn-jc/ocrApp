import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { } from '@react-navigation/elements'

import LoginScreen from '../src/screens/LoginScreen'
import HomeScreen from '../src/screens/HomeScreen'
import NewCustomerScreen from '../src/screens/NewCustomerScreen'
import SuccesScreen from '../src/screens/SuccesScreen'
import theme from '../src/theme'

const Stack = createNativeStackNavigator()

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Login'
        screenOptions={{
          headerShadowVisible: true,
          headerTitleStyle:{
            color: theme.colors.secundary,
            fontSize: 13
          },
          headerTitleAlign: 'center'
        }}
      >
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{
            title: 'Cruz Verde Colombia',
            headerBackVisible: false,
          }}
        />

        <Stack.Screen
          name='Login'
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name='NewCustomer'
          component={NewCustomerScreen}
          options={{
            title: 'Nuevo Cliente Programa Cruz Verde'
          }}
        />
        <Stack.Screen
          name='Succes'
          component={SuccesScreen}
          options={{
            title: 'Nuevo Cliente Programa Cruz Verde',
            headerTitleAlign: 'center',
            headerBackVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}