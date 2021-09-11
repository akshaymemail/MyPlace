import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'

export default function PlaceList() {
  const { places } = useSelector((state) => state.places)

  return (
    <View>
      {places.map((place, index) => (
        <Text key={index}>{place.title}</Text>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({})
