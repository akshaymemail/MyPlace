import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Button,
} from 'react-native'
import { Colors } from '../constants/Colors'

export default function NewPlace() {
  const [place, setPlace] = useState('')
  const submitHandler = () => console.log(place)
  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.title}>New Place</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter place name"
          onChangeText={(text) => setPlace(text)}
        />
        <Button
          color={Colors.primaryColor}
          title="Add Now"
          onPress={submitHandler}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  form: {
    margin: 30,
  },
  input: {
    borderBottomColor: '#cccccc',
    borderBottomWidth: 1,
    marginBottom: 40,
  },
  title: {
    marginBottom: 20,
    fontSize: 20,
  },
})
