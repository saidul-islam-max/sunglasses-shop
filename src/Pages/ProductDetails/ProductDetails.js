import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import './ProductDetails.css'
import useAuth from '../Hooks/useAuth';
import axios from 'axios';
import Footer from '../Footer/Footer';
import NavigationBar from '../Shered/Navbar/NavigationBar';

const ProductDetails = () => {
   
    const { productDetailsId } = useParams();
    const{user} = useAuth()
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data =>{
        console.log(data);
        axios.post('https://quiet-plateau-64329.herokuapp.com/order', data)
        .then(res => {
            if (res.data.insertedId) {
                alert('added successfully');
                reset();
            }
        })

}





    console.log(productDetailsId)
    const [productDetails, setProduct] = useState([]);
    useEffect(() => {
        fetch('https://quiet-plateau-64329.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])
     console.log(productDetails)
    const found = productDetails.find(productDetails => productDetails._id === String(productDetailsId)); 
    // const {productName,offerPrice,oldPrice,description,img1,availability,review} = found
    console.log(found)


    // buton toggol
    const [isLogin,setIslogin] = useState(false)
    const toggoleLogin = e => {
        setIslogin(e.target.checked)
    }
    return (
        <div className=" ">
            <NavigationBar></NavigationBar>
             <div className="row container ">
                 <div className="col-md-6 col-sm-12 col-12 border p-4">
                     <div className="border">
                     <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                <img src={found?.img1} class="d-block w-100" height="300" alt="..."/>
                                </div>
                                <div class="carousel-item">
                                <img src={found?.img2} class="d-block w-100" height="300px" alt="..."/>
                                </div>
                                <div class="carousel-item">
                                <img src={found?.img3} class="d-block w-100" height="300px" alt="..."/>
                                </div>
                            </div>
                            <button class="carousel-control-prev btn-danger" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon " aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next btn-danger" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                            </div>
                     </div>

                     <div>
                         <h3 className="fw-bold mt-5">{found?.productName}</h3>
                         <p>Available: <span className="text-info">{found?.stock}</span> </p>
                         <div className="d-flex justify-content-between col-md-4 col-12 ">
                             <p>Price: {found?.offerPrice}</p>
                             <p className="text-danger"><s>Price: {found?.OldPrice}</s> </p>
                         </div>
                         <h3 className="fw-bold m-0">Description</h3>
                         <p className="m-0">{found?.description}</p>
                         <div class="d-grid gap-2">
                            <button class="btn btn-primary" type="button">
                            <input type="checkbox" onChange={toggoleLogin}  class="form-check-input mx-2" id="exampleCheck1"/>
                            <label class="form-check-label m-0 fw-bold" for="exampleCheck1">Are Your Agree Purchase Package</label>

                            </button>
                            </div>
                     </div>
                 </div>

                 {/* ----------------register form------------------- */}

                 {
                     isLogin ?
                 <div className="col-md-6 col-12 col-sm-8 p-4 border orderRegister">
                 <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name")} placeholder="Enter Your Name"/><br/>
                  
                    <input {...register("email")} value={user.email}/> 
                    <input type="number" {...register("phone")} placeholder="Enter your Phone Number"/> <br/>
              
                    <input {...register("address")} placeholder="Enter Your Address"/> <br/>
                    
                    <input {...register("productName")} value={found?.productName}/> <br/>
                    <input type="number" {...register("productPrice")} value={found?.offerPrice} /> <br/>
                    <input type="number" {...register("nubarOfProduct")} placeholder="Enter Numbar of Product" /> <br/>
                    
                    <input type="submit" />
                    </form>
                 </div>:('')
                 
                }

             </div>
             <Footer></Footer>
        </div>
    );
};

export default ProductDetails;