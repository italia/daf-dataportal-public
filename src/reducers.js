import { combineReducers } from 'redux'
import {
  REQUEST_DATASETS,
  RECEIVE_DATASETS,
  DELETE_DATASETS,
  SELECT_DATASET,
  REQUEST_DATASET_DETAIL,
  RECEIVE_DATASET_DETAIL
} from './actions'

//Object.assign({}, state, .. create a new copy of the state
function datasets( state = { isFetching: false, didInvalidate: false, items: [], dataset: null, ope:'' }, action
) {
  switch (action.type) {
    case REQUEST_DATASETS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_DATASETS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.datasets,
        dataset: null,
        lastUpdated: action.receivedAt,
        ope: action.ope
      })
    case REQUEST_DATASET_DETAIL:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_DATASET_DETAIL:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: null,
        dataset: action.dataset,
        lastUpdated: action.receivedAt,
        ope: action.ope
      })
    default:
      return state
  }
}

//The reducer is just an action that take two parameter state and action
//The reducer that handle the action will make a copy of the state,
//modify it with the data from the action and then  returns the new state
function datasetReducer(state = {}, action) {
  switch (action.type) {
    case REQUEST_DATASET_DETAIL:
    case RECEIVE_DATASET_DETAIL:
    case DELETE_DATASETS:
    case RECEIVE_DATASETS:
    case REQUEST_DATASETS:
      return Object.assign({}, state, {'obj': datasets(state[action], action)
      })
    default:
      return state
  }
}

//will mount each reducer with the corresponding key (datasetReducer)
//but you can change it by naming the key differently (form: reduxFormReducer)
const rootReducer = combineReducers({
  datasetReducer
})

export default rootReducer