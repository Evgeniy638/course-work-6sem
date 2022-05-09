import React from 'react';
import { Route, Routes, Navigate } from 'react-router';

import ListThingPage from '../pages/_thing';
import { PAGE_CREATE_THING, PAGE_LIST_THING, PAGE_LOGIN, PAGE_LOGOUT, PAGE_REGISTRATION, PAGE_THING } from '../common/paths';
import LoginPage from '../pages/_login';

import './index.css';
import LogoutPage from '../pages/_logout';
import RegistrationPage from '../pages/_registration';
import { useIsAuth } from '../common/useIsAuth';
import { useAuth } from '../common/useAuth';
import ThingPage from '../pages/_thing/@Id';
import ThingCreatePage from '../pages/_thing/_create';

function App() {
    const isAuth = useIsAuth();

    // получаем данные пользователя по токену из localStorage
    useAuth();

    return (
        <div className="App">
            <Routes>
                <Route path={PAGE_LOGOUT} element={<LogoutPage />} />
                <Route path={PAGE_LOGIN} element={<LoginPage />} />
                <Route path={PAGE_REGISTRATION} element={<RegistrationPage />} />

                <Route path={PAGE_CREATE_THING} element={<ThingCreatePage />} />
                <Route path={PAGE_LIST_THING} element={<ListThingPage />} />
                <Route path={PAGE_THING} element={<ThingPage />} />

                <Route path='*' element={<Navigate to={isAuth ? PAGE_LIST_THING : PAGE_LOGIN } />} />
            </Routes>
        </div>
    );
}

export default App;
