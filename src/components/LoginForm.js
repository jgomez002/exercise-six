import React from "react";


function LoginForm(){
    return (
    <form className="formElement">
        <div className="PageWrapper">
        <label htmlFor="userName">User Name </label>
        <input type="text" name="userName"/>

        <label htmlFor="Userpassword">Password </label>
        <input type="password" name="Userpassword"/>

        <button type="submit">Submit</button>
    </div>
    </form>
    );
}

export default LoginForm;