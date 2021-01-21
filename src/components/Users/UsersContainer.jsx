import { connect } from 'react-redux';
import { follow, unfollow, setTotalUsersCount } from '../../redux/users-reducer';
import React from 'react';
import Users from './Users';
import preloader from './../../assets/25.svg';
import { toogleFollowingInProgress, onPageChanged, getUsers } from './../../redux/users-reducer';
import { withAuthRedirect } from '../../hok/withAuthRedired';
import { compose } from 'redux';
class UsersContainerAPI extends React.Component {

   componentDidMount() {
      this.props.getUsers(this.props.currentPage, this.props.pageSize);
   };

   onPageChanged = (pageNumber) => {
      this.props.onPageChanged(pageNumber, this.props.pageSize);
   };

   render() {
      return <>
         {this.props.isFetching ? <img alt={'isfetching'} src={preloader} /> : null}
         <Users onPageChanged={this.onPageChanged}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            totalCount={this.props.totalCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            followingInProgress={this.props.followingInProgress} />
      </>
   }
}


let mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalCount: state.usersPage.totalCount,
      currentPage: state.usersPage.currentPage,
      isFetching: state.usersPage.isFetching,
      followingInProgress: state.usersPage.followingInProgress,
   }
}

export default compose(
   connect(mapStateToProps, { follow, unfollow, setTotalUsersCount, toogleFollowingInProgress, getUsers, onPageChanged}),
   withAuthRedirect
)(UsersContainerAPI);
