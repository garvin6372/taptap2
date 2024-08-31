import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import FooterComponent from './footerComponent';

import Main from './main';
import Stats from './state';
import Friends from './friends';
import Boost from './boost';
import Task from './task';

function Example() {
    return (
        <div className="container text-center text-light vh-100 d-flex flex-column justify-content-between">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />}></Route>
                    <Route path="/stats" element={<Stats />}></Route>
                    <Route path="/friends" element={<Friends />}></Route>
                    <Route path="/boost" element={<Boost />}></Route>
                    <Route path="/task" element={<Task />}></Route>
                </Routes>
                <FooterComponent/>
            </BrowserRouter>
        </div>
    );

}

export default Example;

if (document.getElementById('app')) {
    const Index = ReactDOM.createRoot(document.getElementById("app"));

    Index.render(
        <React.StrictMode>
            <Example />
        </React.StrictMode>
    )
}
