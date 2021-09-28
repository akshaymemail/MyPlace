// add new place reducers

import { fetchPlace } from '../../helpers/db'
import { ADD_NEW_PLACE, SET_PLACES } from './types'

const initialState = {
  places: fetchPlace()
    .then((res) => res.rows._array)
    .catch((err) => []),
}

export const addNewPlaceReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_PLACE:
      return {
        places: action.payload,
      }
    case SET_PLACES:
      return {
        places: action.payload,
      }
    default:
      return state
  }
}
