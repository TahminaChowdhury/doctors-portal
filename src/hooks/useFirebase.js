
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut,onAuthStateChanged, signInWithPopup, GoogleAuthProvider, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";

import initAuth from '../Pages/Login/Firebase/firebase.init';
initAuth();


const useFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [isLoading, setisLoading] = useState(true);

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    // login with google

    const loginWithGoogle = (location, history) => {
        setisLoading(true)
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            console.log(result.user)
            const user = result.user;
            saveUserToDb(user.email, user.displayName, 'PUT')
            const destination = location?.state?.from || '/';
                history.replace(destination);
            setError("");
        }).catch((error) => {
           setError(error.message)
        }).finally(() => setisLoading(false));
    }

    const registerUser = (email, password, name, history) => {
            setisLoading(true)
            createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const newUser ={email, displayName: name}
                setUser(newUser);

                // send user info to the db
                saveUserToDb(email ,name, 'POST');

                updateProfile(auth.currentUser, {
                    displayName: name
                  }).then(() => {
                    
                  }).catch((error) => {
                  
                  });
                history.replace("/");
                setError("");
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setisLoading(false));
        };
        // login user 

        const loginUser = (email, password, location , history) => {
            setisLoading(true)
            signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user);
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setError("");
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setisLoading(false));
        };


        const saveUserToDb = (email, displayName, method) => {
            const user = {email, displayName};
            fetch('http://localhost:5000/users', {
                method: method,
                headers: {"content-type": "application/json"},
                body: JSON.stringify(user)
            }).then(res => res.json())
            .then(data => console.log(data))
        }
        // logout user

        const logoutUser =() => {
            setisLoading(true)
            signOut(auth)
            .then(() => {
                setError("");
              }).catch((error) => {
                setError(error.message)
              })
              .finally(() => setisLoading(false));
        };

        // observer

        useEffect(() => {

            const unsubscribe =onAuthStateChanged(auth, (user) => {
                if (user) {
                 setUser(user)
                } else {
                  setUser({})
                }
                setisLoading(false)
              });
              return () => unsubscribe;
        },[])

    return {
        user,
        error,
        isLoading,
        loginWithGoogle,
        registerUser,
        loginUser,
        logoutUser
    }
};

export default useFirebase;