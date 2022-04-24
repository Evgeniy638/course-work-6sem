import { changeReviews, deleteReview, addReview } from './../actions-creators/review';
import { deleteReviewById, fetchReviews, PostCreateReviewArgs, postCreateReview } from './../../api/query/review';
import { Dispatch } from "redux";
import { Review } from '../types/typeReviews';

export const getReviews = (thingId: string) => 
    async (dispatch: Dispatch<any>) => {
        const reviews = await fetchReviews(thingId);
        dispatch(changeReviews(reviews));
    };

export const removeReviewById = (reviewId: string) => 
    async (dispatch: Dispatch<any>) => {
        await deleteReviewById(reviewId);
        dispatch(deleteReview(reviewId));
    };

export const createReview = (
    reviewArgs: PostCreateReviewArgs,
    onSuccess: (newReview: Review) => void,
) => 
    async (dispatch: Dispatch<any>) => {
        const newReview = await postCreateReview(reviewArgs);

        dispatch(addReview(newReview));
        onSuccess(newReview);
    };
