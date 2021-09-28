import React, { useState } from 'react'
import { useEffect } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import PlaceItem from '../components/PlaceItem'
import { fetchPlace } from '../helpers/db'
import { loadPlaces } from '../redux/places/actions'

export default function PlaceList({ navigation }) {
  const { places } = useSelector((state) => state.places)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadPlaces())
  }, [])
  return (
    <FlatList
      keyExtractor={(item) => item.id.toString()}
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
