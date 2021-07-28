import s from './Post.module.css'
const Post = (props) => {
 return(
  <div className={s.post}>
    <div className={s.content}>
      <img src={props.avatarSmall} alt=""/>
      <span>{props.message}</span>
    </div>
    <div>
      <button>Like {props.like}</button>
    </div>
  </div>
 );
};

export default Post;