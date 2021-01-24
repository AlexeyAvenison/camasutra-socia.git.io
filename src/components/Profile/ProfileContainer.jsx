import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getProfile, updateStatus, getStatus } from './../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hok/withAuthRedired';
import { compose } from 'redux';


class ProfileContainer extends React.Component {
    
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getProfile(userId);
        this.props.getStatus(userId);
        
    }

    render() {
        return (
            <Profile {...this.props} status={this.props.status} profile={this.props.profile} updateStatus={this.props.updateStatus} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status:  state.profilePage.status
    }
}

export default compose(
    connect(mapStateToProps, { getProfile, getStatus , updateStatus }),
    withRouter,
)(ProfileContainer);