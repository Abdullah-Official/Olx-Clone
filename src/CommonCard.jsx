import React from 'react'
import './CardCarousel.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import './PopularCommon.css'

function CommonCard(props) {
    return (
        <>
            
<div class="card cardHover p-2  w-100 ">
       
        
       <div className="img">
       
        <img class="card-img-top cardImg" style={{width:'110px', heigh:'180px',alignItems:'center'}} src={props.img} alt="Bologna"/>
        <FavoriteBorderIcon />  
           </div> 
        
        <div class="card-body">
          <h4 class="card-title">{props.price}</h4>
    <h6 class="card-subtitle mb-2 text-muted">{props.model}</h6>
    
          <p class="card-text"><small style={{fontSize:'10px',float:'right',marginTop:'15px',marginLeft:'30px'}}>TODAY</small></p>
          
        </div>
        </div>
        </>
    )
}

export default CommonCard
