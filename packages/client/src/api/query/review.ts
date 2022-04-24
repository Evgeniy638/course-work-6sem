import { Review } from "../../store/types/typeReviews";
import { getHeaders } from "../headers";

export const fetchReviews = async (thingId: string): Promise<Review[]> => {
    const response = await fetch(`/api/reviews?thingId=${thingId}`, {
        method: 'GET',
        headers: getHeaders(true),
    });

    const result = await response.json();

    if (!response.ok) {
        throw result;
    }

    return result;
}

export const deleteReviewById = async (reviewId: string): Promise<void> => {
    const response = await fetch(`/api/reviews/${reviewId}`, {
        method: 'DELETE',
        headers: getHeaders(true),
    });

    const result = await response.json();

    if (!response.ok) {
        throw result;
    }
}

export interface PostCreateReviewArgs {
    text: string;
    raiting: number;
    thingId: string;
}

export const postCreateReview = async (newReview: PostCreateReviewArgs): Promise<Review> => {
    const response = await fetch(`/api/reviews`, {
        method: 'POST',
        headers: getHeaders(true),
        body: JSON.stringify(newReview),
    });

    const result = await response.json();

    if (!response.ok) {
        throw result;
    }

    return result;
}
