import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from './../../../comons/Preloader.jsx'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div className={s.profileInfo}>
            <div className={s.img}>
                <img src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' />
            </div>
            <div className={s.wrap}>
                <img className={s.ava} src={props.profile.photos.large} />
                <div className={s.description}>{props.profile.aboutMe}</div>
                <div>
                    <span>Мои контакты</span>
                    <div>{props.profile.contacts.facebook}</div>
                    <div>{props.profile.contacts.vk}</div>
                    <div>{props.profile.contacts.twitter}</div>
                    <div>{props.profile.contacts.instagram}</div>
                    <div>{props.profile.contacts.github}</div>
                </div>
                
            </div>
        </div>
    )

}

export default ProfileInfo;