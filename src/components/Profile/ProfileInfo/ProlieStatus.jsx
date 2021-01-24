import React from 'react';
import s from './ProfileInfo.module.css';


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }
    
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    
    deactivateEditMode = () => {
        this.props.updateStatus(this.state.status);
        this.setState({
            editMode: false
        })
    }
    updateStatusText = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    render() {
        return (
            <div>
                {this.state.editMode
                    ? <div>
                        <input onChange={this.updateStatusText} onBlur={ this.deactivateEditMode} value={this.state.status} />
                    </div>
                    : <div className={s.blockSpan}>
                        <span className={s.span} onDoubleClick={ this.activateEditMode} >{this.props.status || 'no status'}</span>
                    </div>}
            </div>
        )
    }
}


export default ProfileStatus;