import React from 'react';
import './index.css';
import { Route, Routes, Navigate } from 'react-router';
import ListThingPage from '../pages/_thing';
import { PAGE_LIST_THING } from '../common/paths';

function App() {

    return (
        <div className="App">
            <Routes>
                <Route path={PAGE_LIST_THING} element={<ListThingPage />} />
                <Route path='*' element={<Navigate to="/thing" replace />} />
            </Routes>
        </div>
    );
}

export default App;
