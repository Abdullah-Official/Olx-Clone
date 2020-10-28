import React from 'react'
import HouseData from './HouseData'
import FreshCard from './FreshCard'
import PopularCard from './PoupularCard'
import SellCard from './SellCard'

function PopularAdHouse() {
    return (
        <>
            <div className="container-fluid">
                <div className="row gy-3">
                    
                    {
                     HouseData.map((value,index)=>{
                         if(index == 5){
                             return <div className="col-md-4 col-sm-6 col-lg-4"><SellCard/> </div>
                         }else{
                             return <PopularCard
                             key={index}
                             price = {value.price}
                             title = {value.title}
                             place = {value.place}
                            //  para = {value.para}
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

export default PopularAdHouse
