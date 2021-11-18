import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import NavigationBar from '../Shered/Navbar/NavigationBar';

import { Container } from '@mui/material';
import Products from '../Produncts/Products';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import About from '../About/About';
import Review from '../Review/Review';


const Home = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch('https://quiet-plateau-64329.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])

    return (
        <div>
            <NavigationBar></NavigationBar>
            <Header></Header>
            
            {/* --------------service section----------------- */}
         <div className="container ">
             <h1 className="text-center my-5">Our Letest Product</h1>
             <div className="row">
                 {
                     product.slice(0,6).map(product => 
                     <div 
                     key={product.name}
                     product={product}
                     className="col-md-4 col-12 my-2">
                     <div className="card" >
                            <img src={product.img1} className="card-img-top" height="250px" width="100%" alt="..."/>
                            <div className="card-body">
                                <h6 className="card-title">{product.productName}</h6>
                                <p className="m-0 text-danger fw-bold"><s>Price {product.OldPrice}</s></p>
                                <p className="fw-bold ">Price:{product.offerPrice}tk</p>
                                <p>Available: {product.stock}</p>
                                <Link to={`/productDetails/${product._id}`}>
                                    <button className="btn btn-warning">View</button>
                                </Link>
                            </div>
                            </div>
                     </div>)
                 }

                 
                 
             </div>
         </div>

         {/* ---------footer------ */}
         <About></About>
         <Review></Review>
        <Footer></Footer>
        </div>
    );
};

export default Home;