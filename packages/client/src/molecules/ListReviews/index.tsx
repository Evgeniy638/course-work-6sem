import { Typography } from '@mui/material';
import React, { FC } from 'react';
import { Review } from '../../store/types/typeReviews';
import ItemListReviews from '../ItemListReviews';

import style from './index.module.css';

interface ListReviewsProps {
    reviews: Review[];
}

const ListReviews: FC<ListReviewsProps> = ({ reviews }) => {
    return (
        <div>
            <Typography className={style.lengthListReviews}>
                Отзывы ({reviews.length}):
            </Typography>
            {reviews.map(review => (
                <ItemListReviews key={review.id} className={style.itemList} {...review} />
            ))}
        </div>
    );
};

export default ListReviews;
