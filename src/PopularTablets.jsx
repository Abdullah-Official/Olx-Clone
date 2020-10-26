import React from 'react'
import CommonPopularHeader from './CommonPopularHeader'
import NavbarCat from './NavbarCat'
import PopularAdds from './PopularAdds'
import PopularTop from './PopularTop'
import SideNavigationTablet from './SideNavigationTablet'

function PopularTablets() {
    return (
        <>
        <NavbarCat/>
        <div>
              <CommonPopularHeader
              search1 = 'ipad mini2'
              search2 = 'Mobiles'
              nav1 = 'Vehicles'
              nav2 = 'Tablets'
              nav3 = 'Tablets in Azad Kashmir'
              mainHeading = 'Tablets in Mirpur'
              
              />
            </div>  
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 col-sm-12">
                        <SideNavigationTablet/>
                    </div>
                    <div className="col-md-9">
                       <PopularTop adds='12'/> 
                        <hr/>

                        <PopularAdds adds='12'/>
                    </div> 
                </div>
            </div> <br/> <br/>
        </>
    )
}

export default PopularTablets
