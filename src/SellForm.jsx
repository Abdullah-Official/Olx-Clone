import React, { useState } from 'react'
import './FreshRecommend.css'
import firebase from './firebase'


function SellForm() {

   
  
    const [price,setPrice] = useState('');
    const [product,setProduct] = useState('');
    const [image,setImage] = useState('');
    const [place,setPlace] = useState('');

    

  const sendData = (e) =>{
    e.preventDefault();
    const dataRef = firebase.database().ref('Cards')
    const data = {
      price,
      product,
      image,
      place
    }
    try {
     if(price,product,image,place==''){
      alert("Please fill form correctly")
     }else{
      dataRef.push(data)
      setPrice('')
      setProduct('')
      setImage('')
      setPlace('')
      alert('Your Card has been Submitted')
     }
    } catch (error) {
      alert(error.message)
    }
  }

    return (
        <>
           <div className="contaier-fluid my-auto ">
           <h1 className='my-4 text-center'>ADD YOUR PRODUCT</h1>
               <div className="row m-3 justify-content-center">
                   <div className="col-md-8  bg-light p-3">
                
                   <form  >
  <div class="form-group my-2">
    <label className='p-2' for="exampleInputEmail1">Price</label>
    <input type="text" className="form-control " required value={price} onChange={e => setPrice(e.target.value)}  placeholder="Enter price"/>
  </div>
  <div className="form-group my-2">
    <label className='p-2' for="exampleInputPassword1">Product</label>
    <input type="text" className="form-control " required value={product} onChange={e => setProduct(e.target.value)}    placeholder="Enter product"/>
  </div>
  <div className="form-group ">
    <label className='p-2' for="exampleInputPassword1">Upload Image</label>
    <input type="text"  className="form-control " required value={image}  id='file' onChange={e => setImage(e.target.value)}   placeholder="Enter image URL"/>
      {/* <button>Upload</button> */}
      
  </div> 
  <div className="uploadImg mt-1"><img src={image} width='auto'  height='auto' /></div>
  <div className="form-group ">
    <label className='p-2' for="exampleInputPassword1">Place</label>
    <input type="text"  className="form-control " required value={place}   onChange={e => setPlace(e.target.value)}   placeholder="Enter place"/>
      {/* <button>Upload</button> */}
  </div>
<div className="buttonLoad mt-2">
  
<button type="submit" onClick={sendData} className=" btn w-100 text-center my-2">Submit</button>
</div>  
</form>
<br/>

    
               </div>
           </div>
           </div>
           
           
        </>
    )
}

export default SellForm
