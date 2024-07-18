import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import HomeScreen from '../screens/HomeScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import OnboardingScreen from '../screens/OnboardingScreen'

const Stack = createNativeStackNavigator()

const AppNavigation = () => {
  useEffect(()=>{
    cheackIfAlreadyOnboarded()
  },[])

  const cheackIfAlreadyOnboarded = async => {
    let onboarded = await
  }
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Onboarding'>
            <Stack.Screen name='Onboarding' options={{headerShown:false}} component={OnboardingScreen}/>
            <Stack.Screen name='HomeScreen' options={{headerShown:false}} component={HomeScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation

const styles = StyleSheet.create({})