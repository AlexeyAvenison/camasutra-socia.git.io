import { connect } from 'react-redux';
import { follow, unfollow, setTotalUsersCount } from '../../redux/users-reducer';
import React from 'react';
import Users from './Users';
import { toogleFollowingInProgress, onPageChanged, requestUsers } from './../../redux/users-reducer';
import { compose } from 'redux';
import Preloader from './../../comons/Preloader';
import { getPageSize, getUsers, getTotalCount, getСurrentPage, getIsFetching, getFollowingInProgress, getPagePortionSize } from './../../redux/users-selector';
class UsersContainerAPI extends React.Component {

   componentDidMount() {
      this.props.requestUsers(this.props.currentPage, this.props.pageSize);
   };

   onPageChanged = (pageNumber) => {
      this.props.onPageChanged(pageNumber, this.props.pageSize);
   };
   
   render() {
      
      return <>
         {this.props.isFetching ? <Preloader/> : null}
         <Users onPageChanged={this.onPageChanged}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            totalCount={this.props.totalCount}
            pageSize={this.props.pageSize}z
            currentPage={this.props.currentPage}
            followingInProgress={this.props.followingInProgress}
            portionSize={this.props.pagePortionSize} />
      </>
   }
}

let mapStateToProps = (state) => {
   return {
      users: getUsers(state),
      pageSize: getPageSize(state),
      totalCount: getTotalCount(state),
      currentPage: getСurrentPage(state),
      isFetching: getIsFetching(state),
      pagePortionSize: getPagePortionSize(state),
      followingInProgress: getFollowingInProgress(state)

   }
}
// let mapStateToProps = (state) => {
//    return {
//       users: state.usersPage.users,
//       pageSize: state.usersPage.pageSize,
//       totalCount: state.usersPage.totalCount,
//       currentPage: state.usersPage.currentPage,
//       isFetching: state.usersPage.isFetching,
//       followingInProgress: state.usersPage.followingInProgress,
//    }
// }

export default compose(
   connect(mapStateToProps, { follow, unfollow, setTotalUsersCount, toogleFollowingInProgress, requestUsers, onPageChanged}),
)(UsersContainerAPI);
