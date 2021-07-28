import React from "react";
import {Field, reduxForm} from "redux-form";
import {login, userMe} from "../../redux/auth-reducer";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="username" component="input" type="text" placeholder="Login"/>
            </div>
            <div>
                <Field name="password" component="input" type="password" placeholder="Password"/>
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: "login"})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        debugger
        userMe(formData)
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login