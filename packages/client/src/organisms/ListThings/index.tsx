import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { parametrs } from '../../common/paths';
import { useUrlSearchParams } from '../../hooks/useUrlSearchParams';

import ItemListThing from '../../molecules/ItemListThing';
import { selectors, thunkCreators, useTypedSelector } from '../../store';

import './index.css';

const ListThings: FC = () => {
    const dispatch = useDispatch();
    const things = useTypedSelector(selectors.selectThings);
    const params = useUrlSearchParams();

    useEffect(() => {
        const search = params.get(parametrs.SEARCH_QUERY_PARAMETR) || '';

        dispatch(thunkCreators.getThings(search));
    }, [dispatch, params]);

    return (
        <div className="ListThings">
            {things.map(({ id, title, description, avatarSrc, raiting, isRemoveModerator, creatorId }) => (
                <ItemListThing
                    key={id}
                    id={id}
                    title={title}
                    description={description}
                    avatarSrc={avatarSrc}
                    raiting={raiting}
                    creatorId={creatorId}
                    isRemoveModerator={isRemoveModerator}
                    className={"ListThings__item"}
                />
            ))}
        </div>
    );
}

export default ListThings;

