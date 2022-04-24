import { Avatar, Rating, Typography } from '@mui/material';
import classNames from 'classnames';
import React, { FC } from 'react';
import dateFormat from 'dateformat';

import style from './index.module.css';

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
    className,
    text,
    raiting,
    createTime,
    user,
}) => {
    return (
        <div className={classNames(className)}>
            <div className={style.header}>
                <Avatar
                    alt={`avatar ${user.login}`}
                    src={user.avatarSrc}
                    className={style.avatar}
                />
                <div>
                    <Typography
                        variant="h6"
                        component="h3"
                        className="ItemListThing__title"
                    >
                        {user.fullName}, {user.login}@
                    </Typography>
                    <Typography variant="caption" display="block">
                        {dateFormat(createTime, "dd.mm.yyyy, hh:MM")}
                    </Typography>
                </div>
            </div>
            <p className={style.text}>{text}</p>
            <Rating precision={0.5} value={raiting} readOnly />
        </div>
    );
}

export default ItemListReviews;
