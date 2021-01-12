import { connect } from 'react-redux';
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching } from '../../redux/users-reducer';
import React from 'react';
import Users from './Users';
import preloader from './../../assets/25.svg';
import {usersAPI } from '../../api/api';
import { toogleFollowingInProgress } from './../../redux/users-reducer';
class UsersContainerAPI extends React.Component {

   componentDidMount() {
      this.props.toggleIsFetching(true);
      usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
      .then(data => {
         this.props.toggleIsFetching(false);
         this.props.setUsers(data.items);
         this.props.setTotalUsersCount(data.totalCount);
      });
   };

   onPageChanged = (pageNumber) => {
      this.props.toggleIsFetching(true);
      this.props.setCurrentPage(pageNumber);
      usersAPI.onPageChanged(pageNumber, this.props.pageSize)
         .then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
         });
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
            toogleFollowingInProgress={this.props.toogleFollowingInProgress}
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

const UsersContainer = connect(mapStateToProps, {
   follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toogleFollowingInProgress
})(UsersContainerAPI);

export default UsersContainer;