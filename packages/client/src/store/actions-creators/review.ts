import { ActionListReviews, ListReviewsTypeActions, Review } from "../types/typeReviews";


export const changeReviews = (reviews: Review[]): ActionListReviews => {
    return {
        type: ListReviewsTypeActions.CHANGE_REVIEWS,
        reviews,
    };
}

export const addReview = (review: Review): ActionListReviews => {
    return {
        type: ListReviewsTypeActions.ADD_REVIEW,
        review,
    };
}

export const deleteReview = (reviewId: string): ActionListReviews => {
    return {
        type: ListReviewsTypeActions.DELETE_REVIEW,
        reviewId,
    };
}

export const deleteReviewByModerator = (reviewId: string): ActionListReviews => {
    return {
        type: ListReviewsTypeActions.REMOVE_BY_MODERATOR,
        reviewId,
    };
}

export const updateReviewAvatarSrc = (reviewId: string, avatarSrc: string) => {
    return {
        type: ListReviewsTypeActions.UPDATE_AVATAR_SRC,
        reviewId,
        avatarSrc,
    }
}
