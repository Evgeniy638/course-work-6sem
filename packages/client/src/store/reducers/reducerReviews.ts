import { ActionListReviews, ListReviewsTypeActions, StateReview } from './../types/typeReviews';


const initialState: StateReview = {};

export const reducerReviews = (
    state: StateReview = initialState,
    action: ActionListReviews
): StateReview => {
    switch (action.type) {
        case ListReviewsTypeActions.CHANGE_REVIEWS:
            return {
                ...state,
                reviews: action.reviews,
            };
        
        case ListReviewsTypeActions.ADD_REVIEW:
            const reviews = (state.reviews || [])
                .filter(review => review.creatorId !== action.review.creatorId);
            
            console.log('reviews', reviews);

            return {
                ...state,
                reviews: [
                    action.review,
                    ...reviews,
                ],
            };

        case ListReviewsTypeActions.DELETE_REVIEW:
            return {
                ...state,
                reviews: state.reviews?.filter(({id}) => id !== action.reviewId),
            };
    
        default:
            return state;
    }
}
