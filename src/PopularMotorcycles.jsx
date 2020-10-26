import React from 'react'
import CommonPopularHeader from './CommonPopularHeader'
import NavbarCat from './NavbarCat'
import PopularAdds from './PopularAdds'
import PopularTop from './PopularTop'
import SideNavigationMotor from './SideNavigationMotor'

function PopularMotorcycles() {
    return (
        <>
        <NavbarCat/>
        <div>
              <CommonPopularHeader
              search1 = 'honda 125'
              search2 = 'unique'
              nav1 = 'Bikes'
              nav2 = 'Motorcycles'
              nav3 = 'Motorcycles in Azad Kashmir'
              mainHeading = 'Motorcycles in Mirpur'
              
              />
            </div>   
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 col-sm-12">
                        <SideNavigationMotor/>
                    </div>
                    <div className="col-md-9 col-sm-12">
                        <PopularTop adds='62'/>
                        <hr/>
                        <PopularAdds/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PopularMotorcycles
