import React, {useState} from 'react'
import './FreshCard.css'
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';


function NewFreshCard() {
    const [heart,setHeart] = useState(<FavoriteBorderIcon className='heartIcon1'/>)

    const changeIcon = () =>{
        setHeart(<FavoriteIcon className='heartIconfFill'/>)
    }
    
    const backToNormal = () =>{
        setHeart(<FavoriteBorderIcon className='heartIcon1'/>)
    }

    return (
        <>
            <div className="col-md-3 col-sm-6 col-lg-3">
            <div class="card pt-3 pr-3">
       
        
       <div className="img ind-card">
       
        <img class="card-img-top freshImg" style={{width:'110px', maxHeigh:'180px',alignItems:'center'}} src='' alt="Bologna"/>
            <div onClick={changeIcon} onDoubleClick={backToNormal}>
            {heart}
            </div>
           </div> 
        
        <div class="card-body">
    <h4 class="card-title">Hey</h4>
    <h6 class="card-subtitle mb-2 text-muted">Hi</h6>
    <p class="card-text"><small style={{fontSize:'11px',float:'left',marginTop:'23px',marginLeft:'0px'}}>WOW</small></p>
          <p class="card-text"><small style={{fontSize:'11px',float:'right',marginTop:'15px',marginLeft:'30px'}}>TODAY</small></p>
          
        </div>
        </div>
        </div>
        </>
    )
}

export default NewFreshCard
