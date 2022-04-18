import { RootState } from "../reducers";

export const selectThings = (state: RootState) => state.reducerListThings.things;

export const selectCurrentThing = (state: RootState) => state.reducerListThings.currentThing;

export const selectThingsLoading = (state: RootState) => state.reducerListThings.loading;

export const selectThingsSuggest = (state: RootState) => state.reducerListThings.suggest;
