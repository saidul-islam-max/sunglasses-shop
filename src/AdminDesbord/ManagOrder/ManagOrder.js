import React, { useEffect, useState } from 'react';

const ManagOrder = () => {
    const [managOrders, setManagOrder] = useState([]);
    
    useEffect(() => {
        fetch('https://quiet-plateau-64329.herokuapp.com/order')
            .then(res => res.json())
            .then(data => setManagOrder(data));
    }, [])
    // const {address,phone,productName,nubarOfProduct,name} = managOrders
    console.log(managOrders)
    // delet user
    const handleDeletUser = id => {
        const url = `https://quiet-plateau-64329.herokuapp.com//order/${id}`
        fetch(url,{
            method: 'DELETE'
        })
        .then(res => res.json())
              .then(data => {
                  if(data.deletedCount > 0){
                      alert('deleted data')
                    const remaining = managOrders.filter(managOrders => managOrders._id !== id)
                    setManagOrder(remaining)
                  }
                  
                });
      }
    return (
        <div className="container">
           
            <div className="row">
                <h1>Manag All Order {managOrders.length}</h1>
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
                                <th scope="col">DELETE</th>
                                
                                </tr>
                            </thead>
                               
             {
               managOrders.map( managOrders =>  <tbody managOrders={managOrders}>
                <tr>
                <th scope="row">*</th>
                <td>{managOrders.name}</td>
                <td>{managOrders.address}</td>
                <td>{managOrders.phone}</td>
                <td>{managOrders.productName}</td>
                <td>{managOrders.nubarOfProduct}</td>
                <td><button onClick={() => handleDeletUser(managOrders._id)} className="mx-5">DELETE</button></td>
                </tr>
                
                </tbody>)
           }
                </table>
                  </div>
                
            </div>
            
            
        </div>
    );
};

export default ManagOrder;