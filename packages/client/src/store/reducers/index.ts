import { reducerUser } from './reducerUser';
import { reducerListThings } from './reducerListThings';
import { combineReducers } from "redux"

export const rootReducer = combineReducers({
    reducerListThings,
    reducerUser,
});

export type RootState = ReturnType<typeof rootReducer>
