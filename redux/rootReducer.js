import { combineReducers } from 'redux'
import { addNewPlaceReducer } from './places/reducers'

const rootReducer = combineReducers({
  places: addNewPlaceReducer,
})

export default rootReducer
