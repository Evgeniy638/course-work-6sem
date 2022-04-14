import { Card, CardContent, Rating, Typography } from '@mui/material';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { createLinkToThingPage } from '../../common/paths';

import './index.css';

interface ItemListThingProps {
    id: string;
    title: string;
    description?: string;
    avatarSrc?: string;
    rating?: number;
    className?: string;
}

const ItemListThing: FC<ItemListThingProps> = ({
    id,
    title,
    description,
    avatarSrc,
    rating,
    className
}) => {
    return (
        <Card className={className}>
            <CardContent>
                <div className="ItemListThing">
                    <p className="ItemListThing__description">
                        <div className="ItemListThing__imgWrap">
                            <img className="ItemListThing__img" alt={title} src={avatarSrc} />
                        </div>
                        <Link to={createLinkToThingPage(id)}>
                            <Typography
                                variant="h6"
                                gutterBottom
                                component="h3"
                                className="ItemListThing__title"
                            >
                                {title}
                            </Typography>
                        </Link>
                        {description}
                    </p>
                    {rating && (
                        <Rating precision={0.5} value={rating} readOnly />
                    )}
                </div>
            </CardContent>
        </Card>
    );
};

export default ItemListThing;
