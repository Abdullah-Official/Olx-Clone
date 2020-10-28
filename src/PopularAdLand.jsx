import React from 'react'
import TabData from './TabData'
import FreshCard from './FreshCard'
import PopularCard from './PoupularCard'
import SellCard from './SellCard'
import MobData from './MobData'
import CardData from './CardData'
import CarData from './CarData'
import MotorData from './MotorData'
import LandData from './LandData'

function PopularAdMotor() {
    return (
        <>
            <div className="container-fluid">
                <div className="row gy-3">
                    
                    {
                     LandData.map((value,index)=>{
                         if(index == 6){
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

export default PopularAdMotor
