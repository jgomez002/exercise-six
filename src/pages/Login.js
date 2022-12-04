import React, { useEffect, useState, useCallback } from "react";
import LoginForm from "../components/LoginForm"
import {useNavigate} from "react-router-dom"
import Header from "../components/Header";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";

function Login({isLoggedIn, setIsLoggedIn, setUserInformation}){
    const navigate = useNavigate();
    const [errors,setErrors]=  useState();

    useEffect(()=> {
        if(isLoggedIn) navigate("/");
    }, [isLoggedIn]); 

    const loginUser= useCallback(
        (e) => {
            e.preventDefault();
            const email= e.currentTarget.email.value; 
            const password=e.currentTarget.password.value; 

            const auth= getAuth(); 
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                const user= userCredential.user;
                setIsLoggedIn(true);

            setUserInformation({
                email: user.email,
                displayName: user.displayName, 
                uid:user.uid,
                accessToken:user.accessToken,
            }); 
        })
            .catch((error)=> {
                const errorCode= error.code;
                const errorMessage= error.message; 
                console.warn({error, errorCode, errorMessage});
                setErrors(errorMessage);
            });
        }, [setIsLoggedIn, setUserInformation]);

    return(
    <>
        <Header isLoggedIn={isLoggedIn}  setIsLoggedIn={setIsLoggedIn} setUserInformation= {setUserInformation}/> 
    <div className="PageWrapper">
         <h1>Login</h1>
         <LoginForm  loginUser={loginUser}/>
        <p>{errors}</p>
    </div>
    </>
    )
}

export default Login;