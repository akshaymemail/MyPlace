import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Button,
} from 'react-native'
import { Colors } from '../constants/Colors'
import { useDispatch } from 'react-redux'
import { addNewPlace } from '../redux/places/actions'
import PickImage from '../components/PickImage'
import { Camera } from 'expo-camera'

export default function NewPlace({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null)
  const [place, setPlace] = useState('')
  const [imageUri, setImageUri] = useState()
  useEffect(() => {
    Camera.requestCameraPermissionsAsync()
      .then((res) => {
        if (res.granted) {
          setHasPermission(true)
        }
      })
      .catch((err) => console.log(err))
  }, [])

  const dispatch = useDispatch()
  const submitHandler = () => {
    dispatch(addNewPlace(new Date().toString(), place, imageUri))
    navigation.goBack()
  }

  if (!hasPermission) {
    return (
      <View style={styles.noPermission}>
        <Text>Camera permission is needed to work this application</Text>
      </View>
    )
  }

  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.title}>New Place</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter place name"
          onChangeText={(text) => setPlace(text)}
        />
        <PickImage onImageCaptured={(image) => setImageUri(image)} />
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
  noPermission: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
