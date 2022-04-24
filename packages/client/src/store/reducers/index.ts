import { reducerUser } from './reducerUser';
import { reducerListThings } from './reducerListThings';
import { combineReducers } from "redux"
import { reducerReviews } from './reducerReviews';

export const rootReducer = combineReducers({
    reducerListThings,
    reducerUser,
    reducerReviews,
});

export type RootState = ReturnType<typeof rootReducer>
