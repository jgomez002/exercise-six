import React, {useCallback, useState, useEffect} from "react";
import {useNavigate} from "react-router"
import Header from "../components/Header";

function UserProfilePage({isLoading, setLoggedIn, userInformation}){
    const navigate = useNavigate();
    useEffect(() => {
        if (setLoggedIn) navigate("/");
    },[setLoggedIn]);


    return(
    <div className="PageWrapper">
        <h1>User Profile</h1>
    </div>
    )
}

export default UserProfilePage;