import React from 'react';
import { Route, Routes, Navigate } from 'react-router';

import ListThingPage from '../pages/_thing';
import { PAGE_LIST_THING, PAGE_LOGIN, PAGE_LOGOUT, PAGE_REGISTRATION } from '../common/paths';
import LoginPage from '../pages/_login';

import './index.css';
import LogoutPage from '../pages/_logout';
import RegistrationPage from '../pages/_registration';
import { selectors, useTypedSelector } from '../store';
import { useAuth } from '../common/useAuth';

function App() {
    const user = useTypedSelector(selectors.selectUser);
    const isAuth = useAuth();

    console.log('App', isAuth, user);

    return (
        <div className="App">
            <Routes>
                <Route path={PAGE_LOGOUT} element={<LogoutPage />} />
                <Route path={PAGE_LOGIN} element={<LoginPage />} />
                <Route path={PAGE_REGISTRATION} element={<RegistrationPage />} />

                <Route path={PAGE_LIST_THING} element={<ListThingPage />} />

                {!isAuth && (
                    /* Если нет токена редиректим на страницу логина */
                    <Route path='*' element={<Navigate to={isAuth ? PAGE_LIST_THING : PAGE_LOGIN } />} />
                )}
            </Routes>
        </div>
    );
}

export default App;
