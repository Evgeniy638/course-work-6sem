import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import ItemListThing from '../../molecules/ItemListThing';
import { selectors } from '../../store';

import './index.css';

const ListThings: FC = () => {
    const things = useSelector(selectors.selectThings);

    return (
        <div>
            {things.map(({ id, title, description, avatarSrc, rating }) => (
                <ItemListThing
                    key={id}
                    id={id}
                    title={title}
                    description={description}
                    avatarSrc={avatarSrc}
                    rating={rating}
                    className={"ListThings__item"}
                />
            ))}
        </div>
    );
}

export default ListThings;
