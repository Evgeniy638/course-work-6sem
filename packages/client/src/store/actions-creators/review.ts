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
