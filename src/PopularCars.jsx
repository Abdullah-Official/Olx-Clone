import React from 'react'
import CommonPopularHeader from './CommonPopularHeader'
import NavbarCat from './NavbarCat'
import PopularAdds from './PopularAdds'
import PopularTop from './PopularTop'
import SideNavigationCar from './SideNavigationCar'
import './SideNavigationCar.css'

function PopularCars() {
    return (
        <>
        <NavbarCat/>
        <div>
              <CommonPopularHeader
              search1 = 'toyota'
              search2 = 'alto'
              nav1 = 'Vehicles'
              nav2 = 'Cars'
              nav3 = 'Cars in Azad Kashmir'
              mainHeading = 'Cars in Mirpur'
              
              />
            </div>  
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 col-sm-12">
                        <SideNavigationCar/>
                    </div>
                    <div className="col-md-9 col-sm-12">
                    <PopularTop adds='133'/>
                    <hr/>
                    <PopularAdds/>
                    </div> 
                    
                </div>
            </div>
        </>
    )
}

export default PopularCars
