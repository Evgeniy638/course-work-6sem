import { RootState } from './reducers/index';
import {bindActionCreators, createStore, Store} from 'redux';
import { rootReducer } from './reducers';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { useMemo } from 'react';
import actionsCreators from './actions-creators';

// create a makeStore function
export const store: Store<RootState> = createStore(rootReducer);
// Infer the `RootState` and `AppDispatch` types from the store itself
export { type RootState };
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useActions = () => {
    const dispatch = useDispatch();
    return useMemo(() => bindActionCreators(actionsCreators, dispatch), [dispatch]);
}

export { selectors } from './selectors';
