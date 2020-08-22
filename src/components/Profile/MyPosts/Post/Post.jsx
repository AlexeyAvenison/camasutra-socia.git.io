import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img className={s.avatar} src ='https://www.kinonews.ru/insimgs/poster/thumbs/poster9623_1.jpg' alt='avatar'/>
      {props.message}
      <div>
        <img className={s.like} src="https://cdn0.iconfinder.com/data/icons/e-commerce-207/1024/like-512.png" alt="like" />
        {props.LikeCount}
      </div>
    </div>
  )
}

export default Post;