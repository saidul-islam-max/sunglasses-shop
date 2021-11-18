import React, { useEffect, useState } from 'react';
import NavigationBar from '../Shered/Navbar/NavigationBar';
import reviewPic from './review.jfif'
import StarIcon from '@mui/icons-material/Star';
import './Review.css'

const Review = () => {
    const [review,setReview] = useState([])
    useEffect(() => {
        fetch(`https://quiet-plateau-64329.herokuapp.com/review`)
            .then(res => res.json())
            .then(data => setReview(data));
    }, [])

    return (
     <div>
         
        <div className="container my-5">
            <h1 className="text-center fw-bold my-3">Coustomar Review</h1>
            <div className="row">
            {
            review.map(review =>
                <div 
                key={review.rating}
                review={review} 
                className="col-md-3 col-12 col-sm-6 my-2 text-center  " >
                    <div className="card py-2 reviewCard " height="500px">
                        
                    <div class="text-center" >
                    <img src={reviewPic} className="rounded" height="150px"  alt="..."/>
                        </div>
                        
                        
                       
                        <div className="card-body">
                            <h6 className="card-title">{review?.name}</h6>
                            <p className="m-0 text-info fw-bold">{review?.address}</p>
                            <p>Rating: {review?.rating}<StarIcon/></p>
                            <p className="m-0 fw-bold">{review?.comment.slice(0,100)}</p>
                        </div>
                        </div>

                </div>)
                }
               
            </div>
        </div>
     </div>
    );
};

export default Review;