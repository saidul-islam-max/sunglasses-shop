import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './NavigationBar.css'
import logo from './logo.png'

const NavigationBar = () => {
  const {user,logout} = useAuth()
    return (
        <div>
           <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container">
             
              <Link to="/home" class="navbar-brand fw-bold"><img src={logo} alt="" width="150" height="70"/></Link>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                <li className="nav-item header-link">
                    <NavLink to="/home"
                      activeStyle={{
                        fontWeight: "bold",
                        color: "orange"
                      }}
                    
                    >Home</NavLink>
                    </li>

                   <li className="nav-item header-link">
                    <NavLink to="/products"
                      activeStyle={{
                        fontWeight: "bold",
                        color: "orange"
                      }}
                    
                    >Explore</NavLink>
                    </li>

                    
                    
                    

                    
                    
                    
                    <li className="nav-item header-link">
                    <NavLink to="/userDeshbord"
                      activeStyle={{
                        fontWeight: "bold",
                        color: "orange"
                      }}
                    
                    >Deshbord</NavLink>
                    </li>
                 
                    
                </ul>
                <from className="d-flex">
                {    
                       user?.email ?
                        <div className="d-flex">
                            <img src={user.photoURL} className="rounded-circle my-auto img-fluid" alt="" width="30px" height="30px" />
                        <h5 className="mx-3 my-auto">{user.displayName}</h5>
                       <button onClick={logout} className="btn btn-outline-dark " type="submit">Log Out</button>
                       </div>
                       :<div>
                        <Link to="/login"><button className="btn btn-outline-success " type="submit">Log In</button></Link>
                        </div>
                   }
                </from>
              </div>
            </div>
          </nav>
        </div>
    );
};

export default NavigationBar;