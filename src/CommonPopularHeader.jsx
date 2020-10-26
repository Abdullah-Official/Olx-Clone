import React from 'react'
import './PopularCommon.css'
import PopJumbortron from './PopJumbortron'


function CommonPopularHeader(props) {
    return (
        <>
         <div className="pl-5 popular__main">
            <span className='pop_searches'>Popular Searches: </span>
    <span className='pop_cat'> {props.search1} <span> - </span> {props.search2}</span> 
            </div>
            <div><PopJumbortron/></div>
            <div className="nav">
              <ul className="nav__ul">
                <li>Home </li>
                <li>/</li>
                <li>{props.nav1}</li>
                <li>/</li>
                <li>{props.nav2}</li>
                <li>/</li>
                <li>{props.nav3}</li>
              </ul>
            </div>

            <div className="main_Category pl-4">
    <         h1>{props.mainHeading}</h1>
            </div> <br/>   
        </>
    )
}

export default CommonPopularHeader
