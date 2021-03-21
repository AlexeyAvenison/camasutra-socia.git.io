import React, { useEffect, useState } from 'react';
import s from './ProfileInfo.module.css';


const ProfileStatusHook = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(() => {
        deactivateEditMode();
    }, [props.status]);

    let deactivateEditMode = () => {
        props.updateStatus(status);
        setEditMode(false);
    }

    let activateEditMode = () => {
        setEditMode(true);
    }

    let updateStatusText = (e) => {
        setStatus(e.currentTarget.value);
    }


    return (
        <div>
            {editMode
                ? <div>
                    <input onChange={updateStatusText} onBlur={deactivateEditMode} value={status} />
                </div>
                : <div className={s.blockSpan}>
                    <span className={s.span} onDoubleClick={activateEditMode} >{props.status || 'no status'}</span>
                </div>}
        </div>
    )
}


export default ProfileStatusHook;