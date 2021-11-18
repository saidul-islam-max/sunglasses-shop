
import React from 'react';
import headerBg from './headerman.png'

import './Header.css'
import { Link } from 'react-router-dom';




const Header = () => {
 
    return (
      <div className="bg-light text-center text-dark siteBanner p-5">
        <div className="container">
          <div className="row">
          <div className="col-md-6 md-12">
              <img src={headerBg} className=" " height="500px" width="100%"></img>
            </div>
            <div className="col-md-6 md-12 d-flex align-items-center">
             <div>
               <h2>Wellcome</h2>
              <h1 className="fw-bold hederText">Rahman <span className="text-warning">Sunglaesses </span> House</h1>
              <p> Rahman Sunglaesses House Rahman Sunglaesses House Rahman Sunglaesses House Rahman Sunglaesses House </p>
             
              <Link to="/products">
                <button className="btn btn-warning">View Product</button>
              </Link>
             </div>
            </div>
            
          </div>
        </div>
      
      </div>
    );
};

export default Header;