import { addPost, onPostChange } from '../../../redux/profile-reducer';
import { connect } from 'react-redux';
import MyPosts from './MyPosts';


let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}

const MyPostsContainer = connect(mapStateToProps, {addPost})(MyPosts);

export default MyPostsContainer;