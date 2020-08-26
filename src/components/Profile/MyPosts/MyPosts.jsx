import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
    let posts = props.profilePage.map(p => <Post message={p.messages} LikeCount={p.likesCount} />);

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
                <textarea onChange={postChange} className={s.textArea}></textarea>
                <button onClick={addPost} className={s.button}>Add post</button>
            </div>
            <div className={s.posts}>
                {posts}
            </div>
        </div>
    )
}

export default MyPosts;