import { changeReviews, deleteReview, addReview } from './../actions-creators/review';
import { deleteReviewById, fetchReviews, PostCreateReviewArgs, postCreateReview } from './../../api/query/review';
import { Dispatch } from "redux";

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
    onFinish: () => void,
) => 
    async (dispatch: Dispatch<any>) => {
        try {
            const newReview = await postCreateReview(reviewArgs);

            dispatch(addReview(newReview));
        } catch (error) {
            console.log(error);   
        }

        onFinish();
    };
