import React, { FC } from 'react';
import SpeedDial from '../../organisms/SpeedDial';

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
            <SpeedDial />
        </Page>
    );
}

export default ListThingPage;
