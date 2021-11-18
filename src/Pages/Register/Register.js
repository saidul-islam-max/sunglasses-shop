import { TextField,Button, CircularProgress, Alert } from '@mui/material';

import React, { useState,  } from 'react';
import { NavLink,useHistory} from 'react-router-dom';
import Footer from '../Footer/Footer';
import useAuth from '../Hooks/useAuth';
import NavigationBar from '../Shered/Navbar/NavigationBar';

const Register = () => {
    const history = useHistory();
    const {registerUser,error,isLoading,user} = useAuth();

    const [loginData, setLoginData] = useState({});
    
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        
        // console.log(field,value)
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name,loginData.image, history);;
        e.preventDefault();
    }

    return (
        <div>
            <NavigationBar></NavigationBar>
        <div className="container ">
           <div className="row d-flex justify-content-center align-items-center">
           <div className="col-sm-8 col-md-4 col-12 p-3  border">
                <h3>Please Register</h3>
                
           {!isLoading && <form onSubmit={handleLoginSubmit}>
            
              <TextField 
                    sx={{width:1, m:1,}}
                    id="standard-basic"
                        label="Enter Your Name" 
                        name = "name"
                        type="text"
                        onBlur = {handleOnChange}
                        variant="standard" />
                <TextField 
                    sx={{width:1, m:1,}}
                      id="standard-basic"
                        label="Your Photo Url" 
                        name = "image"
                        type="text"
                        onBlur = {handleOnChange}
                        variant="standard" />
                   
             
              
               
                <TextField 
                    sx={{width:1, m:1,}}
                    id="standard-basic"
                        label="Enter Your Email" 
                        name = "email"
                        type= "email"
                        onBlur = {handleOnChange}
                        variant="standard" />
                   
                
                <TextField
                         sx={{width:1, m:1,}}
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        name = "password"
                        onBlur = {handleOnChange}
                        autoComplete="current-password"
                        variant="standard"
                        />
                   
               
                
                <TextField
                         sx={{width:1, m:1,}}
                        id="standard-password-input"
                        label="Re-Type-Password"
                        type="password"
                        name = "password2"
                        onBlur = {handleOnChange}
                        autoComplete="current-password"
                        variant="standard"
                        />
                
                <p className="text-danger">{error}</p>
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
              }
              {isLoading && <CircularProgress />}

            {user?.email && <Alert severity="success">User Created successfully!</Alert>}
                    

                <NavLink to="/login">
                <Button variant="text">Old User? Please Login</Button>
                </NavLink>

        
           </div>
           </div>
          
       </div>
       <Footer></Footer>
       </div>
    );
};

export default Register;