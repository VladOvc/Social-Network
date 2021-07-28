import React from 'react';
import s from './Sidebar.module.css';
import {NavLink} from "react-router-dom";

const Sidebar = () => {
 return(
  <nav className={s.sidebar}>
   <div className={s.menu}>
     <NavLink to="/profile" className={s.item} activeClassName={s.active}>Profile</NavLink>
     <NavLink to="/users" className={s.item} activeClassName={s.active}>Users</NavLink>
     <NavLink to="/dialogs" className={s.item} activeClassName={s.active}>Message</NavLink>
     <NavLink to="/news" className={s.item} activeClassName={s.active}>News</NavLink>
     <NavLink to="/music" className={s.item} activeClassName={s.active}>Music</NavLink>
   </div>
   <div className={s.item}>Settings</div>
 </nav>
 );
}

export default Sidebar;