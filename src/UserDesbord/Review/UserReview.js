import userEvent from '@testing-library/user-event';
import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../Pages/Hooks/useAuth';
import './UserReview.css'

const UserReview = () => {
    const {user}= useAuth()
    const { register, handleSubmit,reset} = useForm();
    const onSubmit = data => {
        console.log(data);
     
        axios.post('https://quiet-plateau-64329.herokuapp.com/review', data)
        .then(res =>{
            if(res.data.insertedId){
                alert('successfully inserted')
                reset();
            }
        })
     }
    return (
        <div className="container">
             <h1>Are You Happy to Our Service plese send your Review</h1>
            <div className="row d-flex justify-content-center">
           
                <div className="col-md-6 col-12 col-sm-10 border p-5 review">
                    
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name")} value={user.displayName} />
                    <input {...register("address")} placeholder="Enter your Address" />
                    <input type="number" {...register("rating", { max: 5 }) } placeholder="happy service 1 to 5" />
                    <textarea {...register("comment", { required: true, maxLength: 1000 }) } placeholder="enter your comment" />
                    
                    <input type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UserReview;