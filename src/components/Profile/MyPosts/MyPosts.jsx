import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
    let posts = props.profilePage.map(p => <Post message={p.messages} key={p.id} LikeCount={p.likesCount} />);
    let bodyPost = props.newPostText;

    let addPost = () => {
        props.addPost();
    }
    let postChange = (e) => {
        props.onPostChange(e);
    }
    return (
        <div className={s.myPosts}>
            <h3>My posts</h3>
            <div className={s.wrap}>
                <textarea onChange={postChange} value={bodyPost} className={s.textArea}></textarea>
                <button onClick={addPost} className={s.button}>Add post</button>
            </div>
            <div className={s.posts}>
                {posts}
            </div>
        </div>
    )
}

export default MyPosts;