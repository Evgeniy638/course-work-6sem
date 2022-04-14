import React, { FC } from 'react';

import ListThings from '../../organisms/ListThings';
import SearchThings from '../../organisms/SearchThings';
import Page from '../../templates/Page';

import "./index.css";

const ListThingPage: FC = () => {
    return (
        <Page>
            <div className="ListThingPage__search">
                <SearchThings />
            </div>
            <ListThings />
        </Page>
    );
}

export default ListThingPage;
