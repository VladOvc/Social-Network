import React from 'react';
import s from './Header.module.css';
import Header from "./Header";
import {getMe, setAuthUserData} from "../../redux/auth-reducer";
import {connect} from "react-redux";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getMe()
    }

    render() {
     return <Header {...this.props}/>
 }
}

const mapStateToProps = (state) => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth
})

export default connect (mapStateToProps, {setAuthUserData, getMe}) (HeaderContainer)