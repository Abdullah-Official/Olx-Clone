import React, { useState } from 'react'
import './FreshRecommend.css'
import FreshCard from './FreshCard'
import CardData from './CardData'
import SellCard from './SellCard'

function FreshRecommend() {
    const [fresh,setFresh] = useState('')

    const loadMore = () =>{
        setFresh(()=>{
            return <p className=' my-3 alert alert-danger alert-dismissible fade show'>Sorry ! there are no more ADD's ..
            <i className="close" style={{cursor:'pointer'}} data-dismiss="alert" aria-label="Close">&times;</i>
            </p>
            
        })
    }
    
    return (
        <>
        <div className="FreshMedia" style={{height:'1650px'}}>
        <div style = {{height:"400px",marginTop:'-90px'}}>
            <div className="container-fluid freshMain" style={{width:'100%'}}>
                
               <div className="row ">
               <div className="row gx-5 gy-3 mx-auto">
                <h6 className="heading">Fresh Recommendations</h6>
            
                {
                     CardData.map((value,index)=>{
                         if(index == 5){
                             return <div className="col-md-3 col-sm-6 col-lg-3"><SellCard/> </div>
                         }else{
                             return <FreshCard
                             key={index}
                             price = {value.price}
                             title = {value.title}
                             place = {value.place}
                             imgsrc = {value.imgsrc}
                             />
                         }
                     })
                 }
                    
                </div>
               </div>
               
            </div>
            <div className="container">
            {fresh}
            <div className="buttonLoad ml-5 my-3">
                <button onClick={loadMore}>Load More</button>
            </div>
           
            </div>
            
        </div>
        </div>
        </>
    )
}

export default FreshRecommend
