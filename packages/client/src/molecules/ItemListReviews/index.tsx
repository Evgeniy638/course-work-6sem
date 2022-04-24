import { Avatar, Rating, Typography } from '@mui/material';
import classNames from 'classnames';
import React, { FC, useCallback } from 'react';
import dateFormat from 'dateformat';

import DeleteIcon from '@mui/icons-material/Delete';

import style from './index.module.css';
import { selectors, thunkCreators, useTypedSelector } from '../../store';
import { useDispatch } from 'react-redux';

interface ItemListReviewsProps {
    className?: string;
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

const ItemListReviews: FC<ItemListReviewsProps> = ({
    id: reviewId,
    className,
    text,
    raiting,
    createTime,
    creatorId,
    user,
}) => {
    const dispatch = useDispatch();

    const { id: userId } = useTypedSelector(selectors.selectUser) || {};

    const onDelete = useCallback(() => {
        dispatch(thunkCreators.removeReviewById(reviewId))
    }, [dispatch, reviewId]);

    return (
        <div className={classNames(style.item, className)}>
            <div className={style.header}>
                <Avatar
                    alt={`avatar ${user?.login}`}
                    src={user.avatarSrc}
                    className={style.avatar}
                />
                <div className={style.headerCenter}>
                    <Typography
                        variant="h6"
                        component="h3"
                        className={style.title}
                    >
                        {user.fullName}, {user.login}@
                    </Typography>
                    <Typography variant="caption" display="block">
                        {dateFormat(createTime, "dd.mm.yyyy, hh:MM")}
                    </Typography>
                </div>
                {userId === creatorId && (
                    <div className={style.deleteWrap}>
                        <div className={style.delete} onClick={onDelete}>
                            <DeleteIcon />
                        </div>
                    </div>
                )}
            </div>
            <p className={style.text}>{text}</p>
            <Rating precision={0.5} value={raiting} readOnly />
        </div>
    );
}

export default ItemListReviews;
