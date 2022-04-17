import React from 'react';
import { Route, Routes, Navigate } from 'react-router';

import ListThingPage from '../pages/_thing';
import { PAGE_LIST_THING, PAGE_LOGIN, PAGE_LOGOUT } from '../common/paths';
import LoginPage from '../pages/_login';
import { getToken } from '../api';

import './index.css';
import LogoutPage from '../pages/_logout';

function App() {
    const isAuth = !!getToken();

    return (
        <div className="App">
            <Routes>
                <Route path={PAGE_LOGIN} element={<LoginPage />} />
                {!isAuth && (
                    <>
                        {/* Если нет токена редиректим на страницу логина */}
                        <Route path='*' element={<Navigate to={PAGE_LOGIN} />} />
                    </>
                )}
                {isAuth && (
                    <>
                        <Route path={PAGE_LIST_THING} element={<ListThingPage />} />
                        <Route path={PAGE_LOGOUT} element={<LogoutPage />} />
                        <Route path='*' element={<Navigate to={PAGE_LIST_THING} replace />} />
                    </>
                )}
            </Routes>
        </div>
    );
}

export default App;
