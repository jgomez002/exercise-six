import { confirmPasswordReset, createUserWithEmailAndPassword } from "firebase/auth";
import React, {useCallback, useState, useEffect} from "react";
import {useNavigate} from "react-router"
import CreateUserForm from "../components/CreateUserForm";

function CreateUserPage({setIsLoggedIn, setUserInformation, getAuth}){
    const navigate = useNavigate();

    useEffect(() => {
        if (setIsLoggedIn) navigate("/");
    },[setIsLoggedIn]);

    const [errors, setErrors] = useState();
    const signUpUser = useCallback(
        (e) => {
            e.preventDefault();

            const email = e.currentTarget.email.value;
            const password = e.currentTarget.password.value;

            console.log((email, password));

            const auth = getAuth();

            createUserWithEmailAndPassword(auth, email,password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    setIsLoggedIn(true);
                    setUserInformation({
                        email: user.email,
                        displayName: user.displayName,
                        uid: user.uid,
                        accessToken: user.accessToken,
                    });
                    setErrors();
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.warn({error,errorCode,errorMessage});
                });
        },[setErrors, setIsLoggedIn,setUserInformation]
    )
    return(
    <div className="PageWrapper">
        <h1>Create User</h1>
        <CreateUserForm/>
    </div>
    );
}

export default CreateUserPage;