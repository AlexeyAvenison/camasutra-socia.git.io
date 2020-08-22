import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header />
                <Navbar sitebar = {props.state.sitebar}/>
                <div className ='app-wrapper__content'>
                    <Route path='/profile'
                           render ={() => <Profile profilePage={props.state.profilePage}
                           dispatch={props.dispatch}/>} />
                    <Route path='/dialogs'
                           render ={() => <Dialogs dialogsPage={props.state.dialogsPage}
                           dispatch={props.dispatch} />}/>
                    <Route path='/news'
                           render ={() => <News/> } />
                    <Route path='/music'
                           render ={ () => <Music/> } />
                    <Route path='/settings'
                           render ={ () => <Settings/> } />
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;