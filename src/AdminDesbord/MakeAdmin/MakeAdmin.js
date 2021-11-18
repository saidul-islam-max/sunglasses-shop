import { Alert, TextField } from '@mui/material';
import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email,setEmail] = useState('')
    const [success,setSuccess] = useState()
    const handleOnBlur = e => {
       setEmail(e.target.value)
    }
    
    const handleAdminSubmit = e => {
        const user = {email};
        fetch('https://quiet-plateau-64329.herokuapp.com/users/admin',{
            method: 'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
         .then(res => res.json())
         .then(data => {
             if(data.modifiedCount){
                 console.log(data)
                 setSuccess(true)
             }
             console.log(data)
         })



        e.preventDefault(user)
    }
    return (
        <div className="d-flex justify-content-center">
            <div>
            <h1>Make Admin</h1>
            <form onSubmit={handleAdminSubmit}>
            <TextField 
             label="Enter email"
             variant="filled"
             type="email"
             onBlur={handleOnBlur}
             variant="standard"
              />
            <Button type="submit" variant="contained" >Make Admin</Button>
            {success && <Alert severity="success">Add success</Alert>}
            {!success && <Alert severity="error">Not Add Admin</Alert>}
            </form>
            </div>
            
        </div>
    );
};

export default MakeAdmin;