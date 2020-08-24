import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, onPostChangeActionCreator } from '../../../redux/profile-reducer';



const MyPosts = (props) => {

    let posts = props.profilePage.map(p => <Post message={p.messages} LikeCount={p.likesCount} />);

    let newPost = React.createRef();

    let addPost = () => {
        let action = addPostActionCreator();
        props.dispatch(action)
        newPost.current.value = '';
    }
    let onPostChange = () => {
        let text = newPost.current.value;
        let action = onPostChangeActionCreator(text);
        props.dispatch(action);
    }
    return (
        <div className={s.myPosts}>
            <h3>My posts</h3>
            <div className={s.wrap}>
                <textarea onChange={onPostChange} ref={newPost} className={s.textArea}></textarea>
                <button onClick={addPost} className={s.button}>Add post</button>
            </div>
            <div className={s.posts}>
                {posts}
            </div>
        </div>
    )
}

export default MyPosts;