import React from 'react'
import CommonPopularHeader from './CommonPopularHeader'
import NavbarCat from './NavbarCat'

function PopularLand() {
    return (
        <>
        <NavbarCat/>
        <div>
              <CommonPopularHeader
              search1 = 'land'
              search2 = 'plots'
              nav1 = 'Property for Sale'
              nav2 = 'Land & Plots'
              nav3 = 'Land & Plots in Azad Kashmir'
              mainHeading = 'Land & Plots in Mirpur'
              
              />
            </div>  
        </>
    )
}

export default PopularLand
