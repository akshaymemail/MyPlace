// add new place reducers

import { ADD_NEW_PLACE } from './types'

const initialState = {
  places: [],
}

export const addNewPlaceReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_PLACE:
      return {
        places: action.payload,
      }
    default:
      return state
  }
}
