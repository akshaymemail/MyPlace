// add new place action s

import { ADD_NEW_PLACE } from './types'

export const addNewPlace = (id, title, imageUri) => (dispatch, getState) => {
  const {
    places: { places },
  } = getState()
  dispatch({
    type: ADD_NEW_PLACE,
    payload: [...places, { id, title, imageUri }],
  })
}
