import React from 'react';
import s from './ProfileInfo.module.css';
import {updateUserStatus} from "../../../redux/profile-reducer";


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status,
    }
    activatedEditMode = () => {
        console.log("this", this)
        this.setState({
            editMode: true
        })
    }
    deactivatedEditMode = () => {
        this.setState({
            editMode: false
        })
       this.props.updateUserStatus(this.state.status)
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.state.status)
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                <div>
                    {(!this.state.editMode && <span onDoubleClick={ this.activatedEditMode }>{this.props.status}</span>)}
                </div>
                <div>
                    {this.state.editMode && <input onChange={this.onStatusChange} autoFocus={true} onBlur={ this.deactivatedEditMode } type="text" value={this.state.status}/>}
                </div>
            </div>
        )
    }
};

export default ProfileStatus;