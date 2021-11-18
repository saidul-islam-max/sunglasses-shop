import React from 'react';
import useAuth from '../../Pages/Hooks/useAuth';
import LogoutIcon from '@mui/icons-material/Logout';
const UserProfile = () => {
    const {user,logout} = useAuth()
    console.log(user)
    return (
        <div className="container my-5 py-5">
            <div className="row d-flex justify-content-center">
                <div className="col-md-5 col-sm-8 col-10 border text-center">
                    <h3>User</h3>
                    <hr/>
                      <div>
                          <img src={user.photoURL} className="border rounded" alt="?" width="100px" height="80px"></img>
                      
                          <h3 className="my-2">{user.displayName}</h3>
                          <h5>{user.email}</h5>
                        <button onClick={logout}><LogoutIcon/>Log Out</button>

                          
                      </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;