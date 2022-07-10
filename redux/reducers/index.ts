import { combineReducers } from "redux";

import charactersList from './characters'

const reducers = combineReducers({
  charactersList
})

export default reducers;

export type RootState = ReturnType<typeof reducers>;