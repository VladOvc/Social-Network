import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
 return(
  <header className={s.header}>
      <div className={s.header__block}>
      <img src="logo.png" alt=""/>
          {props.isAuth ? <span>{props.login}</span> : <NavLink to={"/login"}>Login</NavLink>}

      </div>
  </header>
 );
};

export default Header;