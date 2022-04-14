import { Breakpoint, Container, Stack } from '@mui/material';
import React, { FC } from 'react';
import { APP_TITLE } from '../../common/constants';
import Header from '../../molecules/Header';

import './index.css';

interface PageProps {
    maxWidth?: Breakpoint;
    title?: string;
}

const Page: FC<PageProps> = ({
    children,
    title = APP_TITLE,
    maxWidth="sm"
}) => {
    return (
        <Stack spacing={2}>
            <Header title={title} usesrname='H'/>
            <main className='main'>
                <Container maxWidth={maxWidth}>
                    {children}
                </Container>
            </main>
        </Stack>
    );
}

export default Page;
