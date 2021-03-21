import React from 'react';
import './App.css';
import { Route, withRouter } from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Preloader from './comons/Preloader';
import { initializedData } from './redux/app-reducer';
import store from './redux/redux-store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

class App extends React.Component {
    componentDidMount() {
        this.props.initializedData();
    }
    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer />
                <NavbarContainer />
                <div className='app-wrapper__content'>
                    <Route path='/profile/:userId?'
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
                    <Route path='/login'
                        render={() => <Login />} />
                </div>
            </div>
        )
    }
}
let mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, { initializedData }))(App);

const MainApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </BrowserRouter>
}

export default MainApp;