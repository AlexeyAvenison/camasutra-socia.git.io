import React from 'react';
import s from './ProfileInfo.module.css';


class ProfileStatus extends React.Component {
    state = {
        editMode: false
        
    }
    
    activateEditMode = () => {
        debugger;
        this.setState({
            editMode: true
        })
    }
    
    deactivateEditMode = () => {
        
        this.setState({
            editMode: false
        })
    }
    
    render() {
        return (
            <div>
                {this.state.editMode
                    ? <div>
                        <input onBlur={ this.deactivateEditMode} value={this.props.status} />
                    </div>
                    : <div className={s.blockSpan}>
                        <span className={s.span} onDoubleClick={ this.activateEditMode} >{this.props.status}</span>
                    </div>}
            </div>
        )
    }
}


export default ProfileStatus;