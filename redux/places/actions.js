// add new place action s
import { ADD_NEW_PLACE } from './types'

import { documentDirectory, moveAsync } from 'expo-file-system'
import { insertPlace } from '../../helpers/db'

export const addNewPlace = (title, imageUri) => (dispatch, getState) => {
  const {
    places: { places },
  } = getState()

  // move image to a permanent location
  const imagePath = documentDirectory + imageUri.split('/').pop()
  moveAsync({ from: imageUri, to: imagePath }).then(() => {
    insertPlace(title, imagePath, 'Dummy Address', 15.6, 13.4)
      .then((res) => {
        dispatch({
          type: ADD_NEW_PLACE,
          payload: [
            ...places,
            { id: res.insertId.toString(), title, image: imagePath },
          ],
        })
      })
      .catch((err) => console.log(err))
  })
}
