import React from "react";
import s from "./Users.module.css"
import userPhoto from "../../assets/images/avatar.png"
import {NavLink} from "react-router-dom";


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for(let i=1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div className={s.users}>
        <div className={s.number__page}>
            {pages.map( p => {
                return <span className={props.currentPage === p && s.selectedPage}
                             onClick={ (e) => { props.onPageChanger(p) } }>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id} className={s.users_item}>
                <div className={s.users_photo}>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} alt=""/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                      onClick={() => {props.unfollow(u.id)}}>Unfollow</button>

                            : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                      onClick={() => {props.follow(u.id)}}>Follow</button>}
                    </div>
                </div>
                <div className={s.users_content}>
                    <div className={s.users_name_status}>
                        <div className={s.users_name}>
                            {u.name}
                        </div>
                        <div className={s.users_status}>
                            {u.status}
                        </div>
                    </div>
                    <div className={s.users_city_country}>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </div>
                </div>
            </div>)
        }</div>
}

export default Users