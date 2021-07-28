import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {getProfile, getUserStatus, setUsersProfile, updateUserStatus} from "../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";
import {userAPI, userMe} from "../../api/api";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId

        userAPI.getMe().then(data => {
            if (!userId) {
                this.props.getProfile(data.data.id)
                this.props.getUserStatus(data.data.id)
            } else {
                this.props.getProfile(userId)
                this.props.getUserStatus(userId)
            }
        })



    }

    render() {
     return <Profile {...this.props} profile={this.props.profile}/>
 }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    userId: state.auth.userId,
    status: state.profilePage.status
})

export default compose(
    connect (mapStateToProps, {setUsersProfile, getProfile, getUserStatus, updateUserStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)