import React from "react";
import {getAuth, signOut} from "firebase/auth";


function Header({setIsLoggedIn, setUserInformation}){
    function logout(){
        const auth= getAuth();
        signOut(auth)
            .then(() => {
                setUserInformation({});
                setIsLoggedIn(false);
            })
            .catch((error) => {
                console.warn(error);
            });
    }
    return (
    <nav className="header">
        <a href ="/">
            <p>Home</p>
        </a>
        <a href ="/login">
            <p>Login</p>
        </a>
        <a href ="/create">
            <p>Create User</p>
        </a>
    </nav>
    );
}

export default Header;
