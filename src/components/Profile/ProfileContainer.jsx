import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getProfile, updateStatus, getStatus } from './../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hok/withAuthRedired';


class ProfileContainer extends React.Component {
    
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.userId;
            // if(userId) {
            //     this.props.history.push("/login");
            // }
        }
        this.props.getProfile(userId);
        this.props.getStatus(userId);
        
    }

    render() {
        return <>
            {/* {!this.props.userId ? <Redirect to={"/login"}/> : null } */}
            <Profile {...this.props} />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status:  state.profilePage.status,
        userId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps, { getProfile, getStatus , updateStatus }),
    withAuthRedirect,
    withRouter,
)(ProfileContainer);