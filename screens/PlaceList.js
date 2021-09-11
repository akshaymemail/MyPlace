import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import PlaceItem from '../components/PlaceItem'

export default function PlaceList({ navigation }) {
  const { places } = useSelector((state) => state.places)

  return (
    <FlatList
      data={places}
      renderItem={({ item }) => (
        <PlaceItem
          item={item}
          onSelect={() =>
            navigation.navigate('placeDetails', { title: item.title })
          }
        />
      )}
    />
  )
}

const styles = StyleSheet.create({})
