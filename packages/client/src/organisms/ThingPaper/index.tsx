import { Button, Paper, Rating, Typography } from '@mui/material';
import React, { FC } from 'react';
import { selectors, useTypedSelector } from '../../store';
import classNames from 'classnames';

import style from './index.module.css';
import { useDispatch } from 'react-redux';
import { removeThingById } from '../../store/thunk-creators/things';
import { useNavigate } from 'react-router';
import { PAGE_LIST_THING } from '../../common/paths';

interface ThingPaperProps {
    className?: string;
}

const ThingPaper: FC<ThingPaperProps> = ({ className }) => {
    const { id: userId } = useTypedSelector(selectors.selectUser) || {};
    const thing = useTypedSelector(selectors.selectCurrentThing);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    if (!thing) {
        return null;
    }

    const { id, title, avatarSrc, description, raiting, creatorId } = thing;

    const handleDelete = () => {
        dispatch(removeThingById(id));

        navigate(PAGE_LIST_THING, {
            replace: true,
        });
    }

    return (
        <Paper className={classNames(style.ThingPaper, className)}>
            {avatarSrc && (
                <img className={style.img} alt={title} src={avatarSrc} />
            )}
            <Typography
                variant="h6"
                gutterBottom
                component="h3"
            >
                {title}
            </Typography>
            <p className={style.description}>
                {description}
            </p>
            <div className={style.Raiting}>
                <Typography variant="overline">
                    Рейтинг: {!raiting && "пока не определён"}
                </Typography>
                {raiting && (
                    <>
                        <Rating precision={0.5} value={raiting} readOnly />
                        <Typography variant="overline" className={style.raitingText}>
                            {raiting}
                        </Typography>
                    </>
                )}
            </div>

            {userId === creatorId && (
                <div className={style.deleteButtonWrap}>
                    <Button onClick={handleDelete} color="error">
                        Удалить
                    </Button>
                </div>
            )}
        </Paper>
    );
}

export default ThingPaper;
