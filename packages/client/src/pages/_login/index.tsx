import React, { FC } from 'react';
import { Paper, Typography } from '@mui/material';

import style from './index.module.css';
import LoginForm from '../../organisms/LoginForm';
import { Navigate } from 'react-router';
import { getToken } from '../../api';
import { PAGE_LIST_THING } from '../../common/paths';

const LoginPage: FC = () => {
    const isAuth = !!getToken();

    if (isAuth) {
        return <Navigate to={PAGE_LIST_THING} />   
    }

    return (
        <Paper className={style.LoginPage}>
            <Typography variant='h5' component='h1' gutterBottom>
                Авторизация
            </Typography>
            <LoginForm />
        </Paper>
    );
}

export default LoginPage;
