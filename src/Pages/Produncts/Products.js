import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import NavigationBar from '../Shered/Navbar/NavigationBar';


const Products = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch('https://quiet-plateau-64329.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])

    return (
        <div>
             <NavigationBar></NavigationBar>
        <div className="container">
           
            <div className="row ">
{/*  const {productName,offerPrice,oldPrice,description,img1,availability,review} = props.product */}
                {
                    product.map(product =>
                     <div 
                     key={product._id
                    }
                     product={product} 
                      className="col-md-3 col-12 col-sm-6 my-2 text-center">
                           <div className="card" >
                            <img src={product.img1} className="card-img-top" height="250px" width="100%" alt="..."/>
                            <div className="card-body">
                                <h6 className="card-title">{product.productName}</h6>
                                <p className="m-0 text-danger fw-bold"><s>Price {product.OldPrice}</s></p>
                                <p className="fw-bold ">Price:{product.offerPrice}tk</p>
                                <Link to={`/productDetails/${product._id}`}>
                                    <button className="btn btn-warning">View</button>
                                </Link>
                            </div>
                            </div>

                    </div>)
                }
                
            </div>
    
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Products;