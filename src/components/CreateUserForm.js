import React from "react";


function CreateUserForm({signUpUser}){
    return (
    <div className="PageWrapper">
        <form className="formElement" onSubmit={(e)=> signUpUser(e)}>
            <label htmlFor="email">Email </label>
            <input type="email" name="email"/>
            <label htmlFor="password">Password </label>
            <input type="password" name="password"/>
            <button type="submit">Submit</button>
        </form>
    </div>
    );
}

export default CreateUserForm;
