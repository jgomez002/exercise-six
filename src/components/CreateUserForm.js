import React from "react";


function CreateUserForm(){
    return (
    <form className="formElement">
    <div className="PageWrapper">
        <label for="userName">User Name </label>
        <input type="text" name="userName"/>
        <button type="submit">Submit</button>
    </div>
    </form>
    );
}

export default CreateUserForm;