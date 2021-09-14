// add new place action s
import { ADD_NEW_PLACE } from './types'

import {
  documentDirectory,
  moveAsync,
  makeDirectoryAsync,
} from 'expo-file-system'

export const addNewPlace = (id, title, imageUri) => (dispatch, getState) => {
  const {
    places: { places },
  } = getState()

  // move image to a permanent location
  const imagePath = documentDirectory + imageUri.split('/').pop()
  moveAsync({ from: imageUri, to: imagePath }).then(() => {
    dispatch({
      type: ADD_NEW_PLACE,
      payload: [...places, { id, title, image: imagePath }],
    })
  })
}
