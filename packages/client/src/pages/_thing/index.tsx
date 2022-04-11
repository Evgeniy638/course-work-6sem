import React, { FC } from 'react';
import SearchThings from '../../organisms/SearchThings';
import Page from '../../templates/Page';

const ListThingPage: FC = () => {
    return (
        <Page>
            <SearchThings />
            <div>Main</div>
        </Page>
    );
}

export default ListThingPage;
