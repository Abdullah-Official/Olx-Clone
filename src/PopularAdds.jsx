import React from 'react'
import CardData from './CardData'
import FreshCard from './FreshCard'
import PopularCard from './PoupularCard'
import SellCard from './SellCard'

function PopularAdds() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    
                    {
                     CardData.map((value,index)=>{
                         if(index == 5){
                             return <div className="col-md-4 col-sm-6 col-lg-4"><SellCard/> </div>
                         }else{
                             return <PopularCard
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
        </>
    )
}

export default PopularAdds
