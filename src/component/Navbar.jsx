import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dragons from './Dragons';
import Missions from './Missions';
import MyProfile from './MyProfile';


const Navbar = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" Component={Dragons}></Route>
                    <Route exact path="/Mission" Component={Missions}></Route>
                    <Route exact path="/MyProfile" Component={MyProfile}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Navbar