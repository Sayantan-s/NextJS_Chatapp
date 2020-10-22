import { combineReducers } from 'redux'
import { testReducer } from './reducers/test.reducer'

const rootReducer = combineReducers({
    test : testReducer
})

export default rootReducer