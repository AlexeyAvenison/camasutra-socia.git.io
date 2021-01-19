import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { getAuthData } from './../../redux/auth-reducer';

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAuthData();
        // authAPI.authMe()
        //     .then(data => {
        //         if(data.resultCode === 0) {
        //             let {id, email, login} = data.data;
        //             this.props.setUserData(id, email, login)
        //         }
        //     });
    }

    render() {
        return (
            <Header {...this.props} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {getAuthData}) (HeaderContainer);