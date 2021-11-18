import { useEffect, useState } from "react"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, updateProfile, signOut } from "firebase/auth";
import initializeFirebase from "../Firebase/Firebase.init"


initializeFirebase()
const useFirebase = () => {
 const [user,setUser] = useState({});
 const [isLoading, setIsLoading] = useState(true);
 const [error, setError] = useState('');
 const auth = getAuth();
 const [admin, setAdmin] = useState(false);
 const googleProvider = new GoogleAuthProvider();


 
 const registerUser = (email, password, name,image, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setError('');
            const newUser = { email, displayName: name,photoURL:image };
            setUser(newUser);
            //save user
            saveUser(email,name)
            updateProfile(auth.currentUser, {
                displayName: name
            }).then(() => {
            }).catch((error) => {
            });
            history.replace('/');
        })
        .catch((error) => {
            setError(error.message);
            console.log(error);
        })
        .finally(() => setIsLoading(false));
}



 const loginUser = (email ,password,location,history) => {
    signInWithEmailAndPassword(auth,email,password)
    .then((userCredential) => {
        // Signed in 
        const destination = location?.state?.from || '/';
                history.replace(destination);
        setError('');
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        setError(error.message);
        console.log(error);
    })

 }
 //observ user
 useEffect( () => {
     const  unsubscribe = onAuthStateChanged(auth , (user) => {
     if(user) {
         setUser(user)
     }
   else{
       setUser({})
   }
   setIsLoading(false)
})
return () => unsubscribe;
 },[])

 const logout = () => {
    setIsLoading(true);
    signOut(auth).then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    })
        .finally(() => setIsLoading(false));
}

const signInWithGoogle = ( ) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
        .then((result) => {
            const user = result.user;
            setUser(user)
            setError('');
        }).catch((error) => {
            setError(error.message);
        }).finally(() => setIsLoading(false));
}
// save user
const saveUser = (email, displayName) => {
    const user = { email, displayName }
    fetch('https://quiet-plateau-64329.herokuapp.com/users', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then()
}



useEffect(() => {
    fetch(`https://quiet-plateau-64329.herokuapp.com/users/${user.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin))
}, [user.email])
  return {
      user,
      admin,
      registerUser,
      logout,
      loginUser,
      isLoading,
      signInWithGoogle,
      error
  }
}

export default useFirebase