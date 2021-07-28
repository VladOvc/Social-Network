import './App.css';
import React from "react";
import Header from "./components/Header/Header";
import Profile from './components/Profile/Profile';
import Sidebar from './components/Sidebar/Sidebar';
import Music from "./components/Music/Music";
import News from "./components/News/News";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

const App = (props) => {
    return (

        <div className="app-wrapper">
            <HeaderContainer/>
            <Sidebar/>

            <div className="content">
                <Route path="/profile/:userId?">
                    <ProfileContainer />
                </Route>
                <Route path="/dialogs">
                    <DialogsContainer />
                </Route>
                <Route path="/music">
                    <Music/>
                </Route>
                <Route path="/news">
                    <News/>
                </Route>
                <Route path="/users">
                    <UsersContainer />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
            </div>
        </div>
    );
}

export default App;
