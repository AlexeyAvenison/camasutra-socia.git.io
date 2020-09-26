import { connect } from 'react-redux';
import Users from './Users';
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCount } from './../../redux/users-reducer';

let mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalCount: state.usersPage.totalCount,
      currentPage: state.usersPage.currentPage
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      follow: (userId) => {
         dispatch(followAC (userId));
      },
      unfollow: (userId) => {
         dispatch(unfollowAC (userId));
      },
      setUsers: (users) => {
         dispatch(setUsersAC (users));
      },
      setCurrentPage: (pageNumber) => {
         dispatch( setCurrentPageAC (pageNumber));
      },
      setTotalUsersCount: (count) => {
         dispatch( setTotalUsersCount (count));
      }
   }
}

const UsersContainer = connect ( mapStateToProps, mapDispatchToProps ) (Users);

export default UsersContainer;