import React from "react";


function Header(){
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