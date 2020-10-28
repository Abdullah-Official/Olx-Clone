import React, { useState } from 'react'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import CardData from './CardData'
import './FreshCard.css'
import FavoriteIcon from '@material-ui/icons/Favorite';
import './PopularCommon.css'

function PopularCard(props) {

    const [heart,setHeart] = useState(<FavoriteBorderIcon className='heartIcon1'/>)

    const changeIcon = () =>{
        setHeart(<FavoriteIcon className='heartIconfFill'/>)
    }
    
    const backToNormal = () =>{
        setHeart(<FavoriteBorderIcon className='heartIcon1'/>)
    }

    return (
        <>
           
            <div className="col-md-4 col-sm-6 col-lg-4">
            <div class="card pt-3 pr-3">
       
        
       <div className="img ind-card">
       
        <img class="card-img-top img-fluid freshImg" style={{width:'', maxHeigh:'',alignItems:'center'}} src={props.imgsrc} alt="Bologna"/>
            <div onClick={changeIcon} onDoubleClick={backToNormal}>
            {heart}
            </div>
           </div> 
        
        <div class="card-body">
    <h4 class="card-title">{props.price}</h4>
    <h6 class="card-subtitle mb-2 text-muted" style={{fontSize:'15px', fontWeight:'400',color:'rgba(0,47,52,.64);'}}>{props.title}</h6>
    <p class="card-text"><small style={{fontSize:'9px',float:'left',marginTop:'23px',marginLeft:'0px'}}>{props.place}</small></p>
    {/* <p className=' card-text'>{props.para}</p> */}
          <p class="card-text"><small style={{fontSize:'11px',float:'right',marginTop:'15px',marginLeft:'30px'}}>TODAY</small></p>
          
        </div>
        </div>
        </div>
            </>
        
    )
}

export default PopularCard
