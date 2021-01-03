import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { Route } from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';


const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header />
            <NavbarContainer />
            <div className='app-wrapper__content'>
                <Route path='/profile'
                    render={() => <ProfileContainer />} />
                <Route path='/dialogs'
                    render={() => <DialogsContainer />} />
                <Route path='/news'
                    render={() => <News />} />
                <Route path='/music'
                    render={() => <Music />} />
                <Route path='/settings'
                    render={() => <Settings />} />
                <Route path='/friends'
                    render={() => <UsersContainer />} />
            </div>
        </div>
    )
}

export default App;