import React from 'react'
import './SellCard.css'


 function SellCard() {
    return (
        <>
            <div className="col-md-3 col-sm-6 col-lg-3">
            <div class="card sellCard1 p-3">
  <div class="card-body p-3">
    <h5 class="card-title sellTitle text-center">Want to see your stuff here?</h5>
    <p class="card-text sellText mt-3 text-center">Make some extra cash by selling things in your community. Go on, it's quick and easy</p> <br/> 
   <div> <a href="#" class="btn btn-primary mt-4 py-1  sellBtnCard text-center">Start Selling</a></div>
  </div>
</div>
        </div>
        </>
    )
}

export default SellCard