import React from 'react'
import './CardCarousel.css'
import CommonCard from './CommonCard'
import banner2 from './Images/banner2.jpg'
import JumboImage from './Images/JumboImage.jpg'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { NavLink } from 'react-router-dom'

function CardCarousel() {
    return (
        <>
        <div style = {{height:"500px"}} >


        
        <div className="mainContainer__carousel ">

<div className="container-fluid   carouselContainer p-4">
    <div className="carousel__header">
    <h6 className="ml-2 heading">More on Mobile Phones</h6>
    <NavLink to="/mobile" className="mr-2">View More</NavLink>
    </div>
<div id="carouselExampleIndicators1" className="carousel slide" data-ride="carousel">

<div className="carousel-inner mt-3 align-items-center    ">
<div className="carousel-item active  ">

<div className="row">
    <div className="col-md-3 col-sm-6 p-2  ind-card">
        <CommonCard
         price='Rs 18,000'
         model='Nokia 6.1 plus'
         img='https://apollo-singapore.akamaized.net/v1/files/zdpow4ns24h41-PK/image;s=300x600;q=60'
        />
    </div>
    <div className="col-md-3 col-sm-6 p-2 ind-card">
        <CommonCard 
        price='Rs 18,000'
        model='Oppo A5s'
        img='https://apollo-singapore.akamaized.net/v1/files/u1lrxgkdhnta-PK/image;s=300x600;q=60'
        />
    </div>
    <div className="col-md-3 col-sm-6 p-2 ind-card">
        <CommonCard
         price='Rs 33,000'
         model='Iphone7 128gb'
         img='https://apollo-singapore.akamaized.net/v1/files/p46uh887aqxi-PK/image;s=300x600;q=60'
        
        />
    </div>
    <div className="col-md-3 col-sm-6 p-2 ind-card">
        <CommonCard
         price='Rs 5,000'
         model='Qz10 2Gb ram specs 32gp'
         img='https://apollo-singapore.akamaized.net/v1/files/1urwqu1fghnn-PK/image;s=300x600;q=60'
        />
    </div>
</div>

</div>
<div className="carousel-item ">

<div className="row">
    <div className="col-md-3 col-sm-6 p-2 ind-card">
        <CommonCard
         price='Rs 28,000'
         model='Huawei Y9 Prime With Box 10 motnhs..'
         img='https://apollo-singapore.akamaized.net/v1/files/b524i653vc411-PK/image;s=300x600;q=60'
        />
    </div>
    <div className="col-md-3 col-sm-6 p-2 ind-card">
        <CommonCard
        price='Rs 12,500'
        model='Samsung Galaxy A01'
        img='https://apollo-singapore.akamaized.net/v1/files/5dcwl796oeon1-PK/image;s=300x600;q=60'
        />
    </div>
    <div className="col-md-3 col-sm-6 p-2 ind-card">
        <CommonCard
         price= 'Rs 90,899'
        model= 'Redmi 9 Pin Pack'
        img = 'https://apollo-singapore.akamaized.net/v1/files/udbx3blsottm-PK/image;s=200x400;q=60'
        />
    </div>
    <div className="col-md-3 col-sm-6 p-2 ind-card">
        <CommonCard
         price= 'Rs 100,000'
         model ='Note 10 plus 5g 12 gb ram'
         img = 'https://apollo-singapore.akamaized.net/v1/files/al0babkhe5rk2-PK/image;s=200x400;q=60'
        />
    </div>
</div>

</div>




</div>
<a className="carousel-control-prev" href="#carouselExampleIndicators1" role="button" data-slide="prev">
<span className="prev  mr-3" aria-hidden="true"><ArrowBackIosIcon/></span>
<span className="sr-only">Previous</span>
</a>
<a className="carousel-control-next " href="#carouselExampleIndicators1" role="button" data-slide="next">
<span style={{color:'black'}} className=" next ml-3" aria-hidden="true">
<NavigateNextIcon fontSize='large'/>
</span>
<span className="sr-only">Next</span>
</a>
</div>
</div>

</div> 













        
        
        </div>
        </>
    )
}

export default CardCarousel









