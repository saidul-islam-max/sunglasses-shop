import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="bg-dark text-light">
        <div className="container">
            <div className="row">
                <div className="col-md-4 col-lg-3 col-sm-6 col-12 my-2 ">
                   
                    <ul className="footer-list ">
                        <h4 className="fw-bold">Our Product</h4>
                        <li>Zingus Lanis Hakon</li>
                        <li>Kites Danus Vasen</li>
                        <li>Men Square Sunglasses</li>
                        <li>Adult Polarised Hiking Sunglasses</li>
                    </ul>
                </div>
                <div className="col-md-4 col-lg-3 my-2  col-sm-6 col-12">
                   
                    <ul className="footer-list ">
                        <h4 className="fw-bold">Collection Brand</h4>
                        <li>RAY-BAN</li>
                        <li>KAREN WALKER</li>
                        <li>MOSCOT</li>
                        <li>MICHAEL KORS</li>
                    </ul>
                </div>

                <div className="col-md-4 col-lg-3 my-2  col-sm-6 col-12">
                   
                    <ul className="footer-list ">
                        <h4 className="fw-bold">Contact Information</h4>
                        <li>mdsaidulislamjuned@gmail.com</li>
                        <li>mdsaidu@@@@juned@gmail.com</li>
                        <li>017@@@@@4635</li>
                        <li>01797988989</li>
                        <li>+777 456 789 234</li>
                    </ul>
                </div>
                <div className="col-md-4 col-lg-3 my-2 col-sm-6 col-12">
                   
                   <ul className="footer-list ">
                       <h4 className="fw-bold">location</h4>
                       <li>Naogaon, Dhaka, Bangladesh</li>
                       <div class="col-auto">
                            <input type="email" id="inputPassword6" placeholder="enter your email" /><br/>
                            <button className="btn-dark my-2">Submit</button>
                        </div>
                   </ul>
               </div>
            </div>
        </div>
        </div>
    );
};

export default Footer;