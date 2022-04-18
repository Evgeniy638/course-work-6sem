import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import ThingPaper from '../../../organisms/ThingPaper';
import { thunkCreators } from '../../../store';
import Page from '../../../templates/Page';

const ThingPage: FC = () => {
    const dispatch = useDispatch();
    const { thingId } = useParams<{ thingId: string }>();

    useEffect(() => {
        if (thingId) {
            dispatch(thunkCreators.getThingById(thingId));
        }
    }, [dispatch, thingId]);

    return (
        <Page>
            <ThingPaper />
        </Page>
    );
}

export default ThingPage;
