import React from "react";


function CreateUserForm({signUpUser}){
    return (
        <div className="PageWrapper">
        <form className="formElement" onSubmit={(e)=> signUpUser(e)}>
        <label htmlfor="username">User Name </label>
        <input type="email" name="email"/>
        <label htmlfor="username">Password </label>
        <input type="password" name="password"/>
        <button type="submit">Submit</button>
    </form>
    </div>
    );
}

export default CreateUserForm;
