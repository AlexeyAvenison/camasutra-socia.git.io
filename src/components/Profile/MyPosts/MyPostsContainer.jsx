import React from 'react';
import { addPostActionCreator, onPostChangeActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';



// const MyPostsContainer = (props) => {
//     let state = props.store.getState();

//     let addPost = () => {
//         let action = addPostActionCreator();
//         props.store.dispatch(action)
//     }


//     let onPostChange = (t) => {
//         let text = t.target.value;
//         let action = onPostChangeActionCreator(text);
//         props.store.dispatch(action);
//     }

//     return (
//         <MyPosts addPost={addPost} onPostChange={onPostChange} profilePage={state.profilePage.postsData} />
//     )
// }

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            let action = addPostActionCreator();
            dispatch(action)
        },
        onPostChange: (t) => {
            let text = t.target.value;
            let action = onPostChangeActionCreator(text);
            dispatch(action);
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;