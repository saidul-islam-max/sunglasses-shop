
import { TextField ,Button, CircularProgress, Alert} from '@mui/material';

import React, { useState } from 'react';
import { NavLink ,useLocation,useHistory} from 'react-router-dom';
import Footer from '../Footer/Footer';
import useAuth from '../Hooks/useAuth';
import NavigationBar from '../Shered/Navbar/NavigationBar';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser,isLoading, error } = useAuth();

    
    const location = useLocation();
    const history = useHistory();

    //  signInWithGoogle(location,history)
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        // console.log(field,value)
    }
    const handleLogin = e =>{
       
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault()
    }
    
    return (
        <div>
            <NavigationBar></NavigationBar>
       <div className="container my-5 py-5">
           <div className="row d-flex justify-content-center align-items-center">
           <div className="col-sm-8 col-md-4 col-12 p-3  border">
                <h3>Please SingIN</h3>
        {!isLoading && <form onSubmit={handleLogin}>
            <div>
            <TextField 
            sx={{width:1, m:1,}}
            id="standard-basic"
            label="Your Email" 
            name = "email"
            onChange = {handleOnChange}
            variant="standard" />
            </div>
        
            
            
            <div className="mb-3">
            <TextField
                        sx={{width:1, m:1,}}
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    name = "password"
                    onChange = {handleOnChange}
                    autoComplete="current-password"
                    variant="standard"
                    />
            </div>

            
            
            <button type="submit" className="btn btn-primary">Submit</button>
            <br/>
            <NavLink to="/register">
            <Button variant="text">New User? Please Register</Button>
            </NavLink>
            </form>}
                {isLoading && <CircularProgress />}
                {error && <Alert severity="error">{error}</Alert>}
                {user?.email && <Alert severity="success">{user.email}</Alert>}

           </div>
           </div>
          
       </div>
       <Footer></Footer>
       </div>
    );
};

export default Login;