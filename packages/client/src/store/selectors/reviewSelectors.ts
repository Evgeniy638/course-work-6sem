import { RootState } from './../reducers/index';

export const getReviews = (state: RootState) => state.reducerReviews.reviews;
