import React from 'react';
import { addPostActionCreator, onPostChangeActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';



const MyPostsContainer = (props) => {
    let state = props.store.getState();

    let addPost = () => {
        let action = addPostActionCreator();
        props.store.dispatch(action)
    }


    let onPostChange = (t) => {
        let text = t.target.value;
        let action = onPostChangeActionCreator(text);
        props.store.dispatch(action);
    }

    return (
        <MyPosts addPost={addPost} onPostChange={onPostChange} profilePage={state.profilePage.postsData} />
    )
}

export default MyPostsContainer;