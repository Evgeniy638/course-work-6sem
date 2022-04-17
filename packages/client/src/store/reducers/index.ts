import { reducerListThings } from './reducerListThings';
import { combineReducers } from "redux"

export const rootReducer = combineReducers({
    reducerListThings,
});

export type RootState = ReturnType<typeof rootReducer>
