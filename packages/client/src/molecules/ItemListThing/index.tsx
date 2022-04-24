import { Card, CardContent, Rating, Typography } from '@mui/material';
import React, { FC, useCallback } from 'react';
import { Link } from 'react-router-dom';

import BlockIcon from '@mui/icons-material/Block';

import { createLinkToThingPage } from '../../common/paths';
import { selectors, thunkCreators, useTypedSelector } from '../../store';

import './index.css';
import { useDispatch } from 'react-redux';
import { UserRole } from '../../store/types/typeUser';
import classNames from 'classnames';

interface ItemListThingProps {
    id: string;
    title: string;
    description?: string;
    avatarSrc?: string;
    raiting?: number;
    className?: string;
    creatorId: string;
    isRemoveModerator: boolean;
}

const ItemListThing: FC<ItemListThingProps> = ({
    id,
    title,
    description,
    avatarSrc,
    raiting,
    className,
    creatorId,
    isRemoveModerator,
}) => {
    const dispatch = useDispatch();
    
    const { id: userId, role } = useTypedSelector(selectors.selectUser) || {};

    let itemListThingBody = (
        <p>Забанено модератором</p>
    );
    
    const onBan = useCallback(() => {
        dispatch(thunkCreators.removeThingByIdByModerator(id));
    }, [dispatch, id]);


    if (!isRemoveModerator) {
        itemListThingBody = (
            <>
                <p className="ItemListThing__description">
                    {avatarSrc && (
                        <div className="ItemListThing__imgWrap">
                            <img className="ItemListThing__img" alt={title} src={avatarSrc} />
                        </div>
                    )}
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
                <div className={classNames("ItemListThing__bottom", {
                    ItemListThing__bottom_end: !raiting
                })}>
                    {raiting && (
                        <Rating precision={0.5} value={raiting} readOnly />
                    )}
                    {userId !== creatorId && role === UserRole.MODERATOR && (
                        <div className="ItemListThing__ban" onClick={onBan}>
                            <BlockIcon />
                        </div>
                    )}
                </div>
            </>
        );
    }

    return (
        <Card className={className}>
            <CardContent>
                <div className="ItemListThing">
                    {itemListThingBody}
                </div>
            </CardContent>
        </Card>
    );
};

export default ItemListThing;
