import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import PlaceList from '../screens/PlaceList'
import NewPlace from '../screens/NewPlace'
import PlaceDetails from '../screens/PlaceDetails'
import PlaceMap from '../screens/PlaceMap'
import { Colors } from '../constants/Colors'

export default function Navigator() {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="placeList"
        screenOptions={({}) => ({
          headerStyle: { backgroundColor: Colors.primaryColor },
          headerTintColor: Colors.textColor,
          headerTitle: 'Screen',
        })}
      >
        <Stack.Screen
          name="placeList"
          component={PlaceList}
          options={({}) => ({
            headerTitle: 'Place List',
          })}
        />
        <Stack.Screen
          name="newPlace"
          component={NewPlace}
          options={({}) => ({
            headerTitle: 'New Place',
          })}
        />
        <Stack.Screen
          name="placeDetails"
          component={PlaceDetails}
          options={({}) => ({
            headerTitle: 'Place Details',
          })}
        />
        <Stack.Screen
          name="placeMap"
          component={PlaceMap}
          options={({}) => ({
            headerTitle: 'Place Map',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})
