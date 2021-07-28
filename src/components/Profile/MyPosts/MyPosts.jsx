import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/avatar.png"




const MyPosts = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    let postsElement = props.posts.map( p => <Post message={p.message}
                                                   like={p.likesCount}
                                                   avatarSmall={props.profile.photos.small != null ? props.profile.photos.small : userPhoto}/>)

    let newPostElement = React.createRef()

    let onChangePost = () => {
        let newPostText =  newPostElement.current.value
        props.onChangePost(newPostText)
    }



 return(
  <div className={s.my_posts}>
    <div className={s.header_title}>My posts</div>
      <div className={s.add_post}>
          <textarea ref={newPostElement}
                    value={props.newPostText}
                    onChange={onChangePost}/>
          <button onClick={() => {props.addPost()}}>Push</button>
      </div>
      { postsElement }
  </div>
 );
};

export default MyPosts;