import { Paper } from '@mui/material';
import classNames from 'classnames';
import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { selectors, thunkCreators, useTypedSelector } from '../../store';
import ListReviews from '../../molecules/ListReviews';

import style from './index.module.css';

interface ThingReviewsProps {
    className?: string;
    thingId: string;
}

const ThingReviews: FC<ThingReviewsProps> = ({ thingId, className }) => {
    const dispatch = useDispatch();

    const reviews = useTypedSelector(selectors.getReviews);

    useEffect(() => {
        dispatch(thunkCreators.getReviews(thingId));
    }, [dispatch, thingId]);

    if (!reviews) {
        return null;
    }

    return (
        <Paper className={classNames(style.ThingReviews, className)}>
            <ListReviews reviews={reviews} />
        </Paper>
    );
}

export default ThingReviews;
