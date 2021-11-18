import React from 'react';
import { Link } from 'react-router-dom';
import about from './about.jpg'

const About = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-12 my-5 text-center">
                    <h2 className="fw-bold">About Us</h2>
                    <p className="fw-bold">No matter what the season might be, one doesn’t really need a reason to flaunt a pair of stylish sunglasses. Available in an assorted range and variety of styles, patterns and colours, sunglasses have established a wide market for themselves and are here to stay for a long time. Buy sunglasses online through Lenskart.com and choose from a wide range of over 1,500 sunglasses. Available in different shapes, sizes, colours and frames, the price range of sunglasses at Lenskart.com is from Rs. 350 to Rs. 27,950. Lenskart.com assures you the best sunglasses online shopping experience. Be it Delhi, Mumbai, Kolkata, Chennai, Bangalore, Ahmedabad or any other city, buy sunglasses online with ease with Lenskart.</p>
                    <Link to="/products"><button type="button" class="btn btn-dark">Dark</button></Link>
                </div>
                <div className="col-md-6 col-12">
                    <img src={about} className="img-fluid"></img>
                </div>
            </div>
        </div>
    );
};

export default About;