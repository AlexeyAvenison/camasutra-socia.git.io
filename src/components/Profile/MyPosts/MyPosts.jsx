import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { maxLengthCreator, required } from './../../../utils/validators/validator';
import { FormsCreator } from './../../../comons/FormsControl';



let maxLength10 = maxLengthCreator(10);
const TextArea = FormsCreator("textarea");

const PostsForm = (props) => {
    

    return (
        <form className={s.form} onSubmit={props.handleSubmit}>
            <Field typeField="input" validate={[required, maxLength10]} className={s.textArea} placeholder={"Write your post"} name={"MyPost"} component={TextArea} ></Field>
            <button className={s.button}>Add post</button>
        </form>
    )
}

export const MyPostReduxForm = reduxForm({ form: 'myPostProfile' })(PostsForm)

const MyPosts = (props) => {
    let posts = props.profilePage.map(p => <Post message={p.messages} key={p.id} LikeCount={p.likesCount} />);

    let newPosts = (value) => {
        props.addPost(value.MyPost)
    }
    return (
        <div className={s.myPosts}>
            <h3>My posts</h3>
            <div className={s.wrap}>
                <MyPostReduxForm onSubmit={newPosts} />
            </div>
            <div className={s.posts}>
                {posts}
            </div>
        </div>
    )
}

export default MyPosts;