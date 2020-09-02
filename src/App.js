import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import { Route } from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';


const App = (props) => {
    debugger;
    return (
        <div className='app-wrapper'>
            <Header />
            <NavbarContainer store={props.store} />
            <div className='app-wrapper__content'>
                <Route path='/profile'
                    render={() => <Profile store={props.store} />} />
                <Route path='/dialogs'
                    render={() => <DialogsContainer store={props.store} />} />
                <Route path='/news'
                    render={() => <News />} />
                <Route path='/music'
                    render={() => <Music />} />
                <Route path='/settings'
                    render={() => <Settings />} />
            </div>
        </div>
    )
}

export default App;