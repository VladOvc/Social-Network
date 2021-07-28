import React from 'react'
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {addPost, onChangePost} from "../../../redux/profile-reducer";

const mapStateToProps = (state)=> {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        profile: state.profilePage.profile
    }
}


const MyPostsContainer = connect(mapStateToProps, {onChangePost, addPost} )(MyPosts);

export default MyPostsContainer;