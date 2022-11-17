import { createBrowserRouter, RouterProvider} from "react-router-dom";
import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
// styles & components
import "./App.css";
import CreateUserPage from "./pages/CreateUser";
import Login from "./pages/Login";
import UserProfilePage from "./pages/UserProfile";
import Header from "./components/Header";

 const firebaseConfig = {
  apiKey: "AIzaSyD8je9X8dWedy4ltE3-ShpmWK40APKambk",
  authDomain: "exercise-six-dynweb.firebaseapp.com",
  projectId: "exercise-six-dynweb",
  storageBucket: "exercise-six-dynweb.appspot.com",
  messagingSenderId: "389089056078",
  appId: "1:389089056078:web:b5120d54b4be9eae38ba1f"
};

function App() {
const [appInitialized, setappInitialized] = useState (false);
const [isLoading, setIsLoading] = useState (true);
const [isLoggedIn, setIsLoggedIn] = useState (false);
const [userInformation, setUserInformation] = useState ({});


  useEffect(()=> {
    initializeApp(firebaseConfig);
    setappInitialized(true);
  },[]);
  useEffect(() => {
    if(appInitialized) {
      const auth = getAuth();
      onAuthStateChanged(auth,(user)=>{
        if (user){
          setUserInformation(user);
          isLoggedIn(true);
        }else{
          setUserInformation({});
          isLoggedIn(false);
        }
        setIsLoading(false);
      });
    }
  },[appInitialized]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <UserProfilePage
      setIsLoading={isLoading}
      setIsLoggedIn={isLoggedIn}
      setUserInformation={userInformation}/>,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/create",
      element: <CreateUserPage 
        setIsLoggedIn={isLoggedIn}
        setUserInformation={userInformation}/>,
    },
  ]);

  return (
    <div className="App">
      <Header/>
    <RouterProvider router={router} />
    </div>
  );
}


export default App;
