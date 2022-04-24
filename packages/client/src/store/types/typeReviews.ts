export interface Review {
    id: string;
    text: string;
    raiting: number;
    creatorId: string;
    thingId: string;
    createTime: string;
    user: {
        login: string;
        avatarSrc?: string;
        fullName: string;
    };
}

export interface StateReview {
    reviews?: Review[];
}

export enum ListReviewsTypeActions {
    CHANGE_REVIEWS = 'CHANGE_REVIEWS',
    ADD_REVIEW = 'ADD_REVIEW',
    DELETE_REVIEW = 'DELETE_REVIEW',
}

interface ChangeReviews {
    type: ListReviewsTypeActions.CHANGE_REVIEWS;
    reviews: Review[];
}

interface AddReview {
    type: ListReviewsTypeActions.ADD_REVIEW;
    review: Review;
}

interface DeleteReview {
    type: ListReviewsTypeActions.DELETE_REVIEW;
    reviewId: string;
}

export type ActionListReviews = ChangeReviews |
    AddReview |
    DeleteReview;

