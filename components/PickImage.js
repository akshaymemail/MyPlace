import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, Button } from 'react-native'
import { Colors } from '../constants/Colors'
import { getCameraPermissionsAsync, launchCameraAsync } from 'expo-image-picker'
import { Camera } from 'expo-camera'

export default function PickImage({ onImageCaptured }) {
  const [image, setImage] = useState('')
  const imagePickerHandler = () => {
    getCameraPermissionsAsync()
      .then((res) => {
        if (res.granted) {
          launchCameraAsync({ allowsEditing: true, aspect: [16, 9] })
            .then((res) => {
              setImage(res.uri)
              onImageCaptured(res.uri)
            })
            .catch((err) => console.log(err))
        }
      })
      .catch((err) => {
        Camera.requestCameraPermissionsAsync()
          .then((res) => {
            if (res.granted) {
              setHasPermission(true)
            }
          })
          .catch((err) => console.log(err))
      })
  }

  return (
    <View style={styles.imagePicker}>
      <View style={styles.imagePreview}>
        {!image ? (
          <Text>No Image Picked Yet!</Text>
        ) : (
          <Image style={styles.image} source={{ uri: image }} />
        )}
      </View>
      <Button
        title="Take Image"
        color={Colors.primaryColor}
        onPress={imagePickerHandler}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  imagePicker: { marginBottom: 40 },
  imagePreview: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#cccccc',
    borderWidth: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
})
