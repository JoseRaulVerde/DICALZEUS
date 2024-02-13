import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './screens/Home/HomePage';
import List from './screens/List/list.jsx';
import Login from './screens/Acounts/Login/Login.jsx';
import CreateAcount from './screens/Acounts/CreateAcount/CreateAcount.jsx';


function RouterManager() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/list" element={<List />} />
                <Route path="/login" element={<Login />} />
                <Route path="/createAcount" element={<CreateAcount />} />
            </Routes>
        </Router>
    );
}

export default RouterManager;
