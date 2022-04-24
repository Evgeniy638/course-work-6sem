import { changeReviews, deleteReview, addReview, updateReviewAvatarSrc } from './../actions-creators/review';
import { deleteReviewById, fetchReviews, PostCreateReviewArgs, postCreateReview } from './../../api/query/review';
import { Dispatch } from "redux";
import pMap from 'p-map';
import { fetchAvatar } from '../../api/query/user';

interface PrimaryValues {
    reviewId: string;
    creatorId: string;
}

export const getReviews = (thingId: string) => 
    async (dispatch: Dispatch<any>) => {
        const reviews = await fetchReviews(thingId);
        dispatch(changeReviews(reviews));

        const primaryValues: PrimaryValues[] = reviews.map(review => ({
            reviewId: review.id,
            creatorId: review.creatorId,
        }));

        pMap(primaryValues, async ({ reviewId, creatorId }) => {
            const { avatarSrc } = await fetchAvatar(creatorId);

            dispatch(updateReviewAvatarSrc(reviewId, avatarSrc));
        }, {
            concurrency: 5,
        });
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
