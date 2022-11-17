import React, { useEffect } from "react";
import LoginForm from "../components/LoginForm"
import {useNavigate} from "react-router"
import Header from "../components/Header";

function Login({isLoggedIn}){
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoggedIn) navigate("/");
    },[isLoggedIn]);

    return(
    <div className="PageWrapper">
         <h1>Login</h1>
         <LoginForm/>
    </div>
    )
}

export default Login;