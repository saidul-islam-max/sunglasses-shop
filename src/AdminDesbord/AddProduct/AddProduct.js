
import axios from 'axios';
import React from 'react';
import { Placeholder } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './AddProduct.css'


const AddProduct = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data =>{
        console.log(data);
        axios.post('https://quiet-plateau-64329.herokuapp.com/product', data)
        .then(res => {
            if (res.data.insertedId) {
                alert('added successfully');
                reset();
            }
        })

}
  

    return (
        <div className="constainer text-center">
            <h1>Add Product</h1>

            <div className="row d-flex justify-content-center align-item-center addService">
                 <div className="col-md-6 md-12 border p-3">
                 <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("productName") } Placeholder="Add Product Name"/><br/>
                    <textarea {...register("description")} Placeholder="Add Product Description"/><br/>
                    <input type="number" {...register("offerPrice")} Placeholder="Add Product Offer Price"/>
                    <input type="number" {...register("OldPrice")}Placeholder="Add Product Old Price"/><br/>
                    <input  {...register("stock")} Placeholder="Product Stock or Stok Out" /><br/>
                    <input {...register("img1")} Placeholder="Add Product Image 1" />
                    <input {...register("img2")} Placeholder="Add Product Image 2"/>
                    <input {...register("img3")} Placeholder="Add Product Image 3" /><br/>
                    <div>
                    
                    <input type="submit" className="btn btn-primary w-100 fs-3" />
                    </div>
                    
                    </form>
                 </div>
            </div>
        </div>
    );
};

export default AddProduct;