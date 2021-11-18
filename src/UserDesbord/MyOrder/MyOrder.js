import React, { useEffect, useState } from 'react';
import useAuth from '../../Pages/Hooks/useAuth';

const MyOrder = () => {
    const {user} = useAuth()
    const [myOrder, setMyOrder] = useState([]);
    console.log(user?.email)
    useEffect(() => {
        fetch(`https://quiet-plateau-64329.herokuapp.com/order?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMyOrder(data));
    }, [])


    const handleDeletUser = id => {
        const url = `https://quiet-plateau-64329.herokuapp.com/order/${id}`
        fetch(url,{
            method: 'DELETE'
        })
        .then(res => res.json())
              .then(data => {
                  if(data.deletedCount > 0){
                      alert('deleted data')
                    const remaining = myOrder.filter(myOrder => myOrder._id !== id)
                    setMyOrder(remaining)
                  }
                  
                });
      }
 console.log(myOrder)
    return (
        <div className="container">
           
            <div className="row">
                <h1>Manag My Order {myOrder.length}</h1>
            <div className="col-md-12 col-12 col-sm-12">
            <table class="table">
                           <thead>
                                <tr>
                                <th scope="col">*</th>
                                <th scope="col">Name</th>
                                <th scope="col">Address</th>
                                <th scope="col">Phone No</th>
                                <th scope="col">Product Name</th>
                                <th scope="col">No Of Product</th>
                                <th scope="col">Delete</th>
                                
                                </tr>
                            </thead>
                               
             {
               myOrder.map( myOrder =>  <tbody myOrder={myOrder}>
                <tr>
                <th scope="row">*</th>
                <td>{myOrder.name}</td>
                <td>{myOrder.address}</td>
                <td>{myOrder.phone}</td>
                <td>{myOrder.productName}</td>
                <td>{myOrder.nubarOfProduct}</td>
                <td><button onClick={() => handleDeletUser(myOrder._id)} className="mx-5 btn-dark">DELETE</button></td>
                </tr>
                
                </tbody>)
           }
                </table>
                  </div>
                
            </div>
            
            
        </div>
    );
};

export default MyOrder;