import React from 'react';
import Header from '../Header/Header';
import NavigationBar from '../Shered/Navbar/NavigationBar';

const NotFound = () => {
    return (
        <div>

       <NavigationBar></NavigationBar>
        <div className="container">
            <h1>Your Page Not Found 404</h1>
        </div>
        </div>
    );
};

export default NotFound;