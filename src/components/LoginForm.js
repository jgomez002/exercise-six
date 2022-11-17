import React from "react";


function LoginForm(){
    return (
    <div className="PageWrapper">
    <form className="formElement">
        <label htmlFor="userName">User Name </label>
        <input type="text" name="userName"/>

        <label htmlFor="Userpassword">Password </label>
        <input type="password" name="Userpassword"/>

        <button type="submit">Submit</button>
    </form>
    </div>
    );
}

export default LoginForm;