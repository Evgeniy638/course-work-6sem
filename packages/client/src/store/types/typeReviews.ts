export interface Review {
    id: string;
    text: string;
    raiting: number;
    creatorId: string;
    thingId: string;
    createTime: string;
    isRemoveModerator: boolean;
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
    UPDATE_AVATAR_SRC = 'UPDATE_AVATAR_SRC',
    REMOVE_BY_MODERATOR = 'REMOVE_BY_MODERATOR',
}

interface RemoveByModerator {
    type: ListReviewsTypeActions.REMOVE_BY_MODERATOR;
    reviewId: string;
}

interface UpdateAvatarSrc {
    type: ListReviewsTypeActions.UPDATE_AVATAR_SRC,
    avatarSrc: string;
    reviewId: string;
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
    DeleteReview |
    UpdateAvatarSrc |
    RemoveByModerator;

