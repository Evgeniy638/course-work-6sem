import { Breakpoint, Container, Stack } from '@mui/material';
import React, { FC } from 'react';
import Header from '../../molecules/Header';

import './index.css';

interface PageProps {
    maxWidth?: Breakpoint;
}

const Page: FC<PageProps> = ({ 
    children, 
    maxWidth="sm"
}) => {
    return (
        <Stack spacing={2}>
            <Header title='H'/>
            <main className='main'>
                <Container maxWidth={maxWidth}>
                    {children}
                </Container>
            </main>
        </Stack>
    );
}

export default Page;
