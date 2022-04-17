import { RootState } from "../reducers";

export const selectThings = (state: RootState) => state.reducerListThings.things;

export const selectThingsLoading = (state: RootState) => state.reducerListThings.loading;

export const selectThingsSuggest = (state: RootState) => state.reducerListThings.suggest;
