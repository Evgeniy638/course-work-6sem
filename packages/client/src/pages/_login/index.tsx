import React, { FC } from 'react';
import { Paper, Typography } from '@mui/material';

import style from './index.module.css';
import LoginForm from '../../organisms/LoginForm';

const LoginPage: FC = () => {
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
