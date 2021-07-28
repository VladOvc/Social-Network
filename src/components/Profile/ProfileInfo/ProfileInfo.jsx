import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/avatar.png"
import ProfileStatus from "./ProfileStatus";
import {updateUserStatus} from "../../../redux/profile-reducer";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div className={s.avatar__info__box}>
                <div className={s.avatar}>
                    <img src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto} alt=""/>
                </div>
                <div className={s.profile__info}>
                    <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
                    <div className={`${s.item} ${s.info_name}`}>{props.profile.fullName}</div>
                    <div className={s.item}>Date of Birth: 2 january</div>
                    <div className={s.item}>City: Lubotin</div>
                    <div className={s.item}>Education: BSU'11</div>
                    <div className={s.item}>Web Site: <a
                        href="http://vlad-hosting.ru//portfolio/index.html">http://vlad-hosting.ru//portfolio/index.html</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;