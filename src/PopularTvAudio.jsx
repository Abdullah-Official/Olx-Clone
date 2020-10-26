import React, {useState} from 'react'
import CommonPopularHeader from './CommonPopularHeader'
import NavbarCat from './NavbarCat'
import PopularAdds from './PopularAdds'
import PopularTop from './PopularTop'
import SideNavigationTv from './SideNavigationTv'

function PopularTvAudio() {
    return (
        <>
        <NavbarCat/>
        <div>
              <CommonPopularHeader
              search1 = 'bluetooth speaker'
              search2 = 'electronics'
              nav1 = 'Electronics & Home Appliances'
              nav2 = 'TV - Video - Audio'
              nav3 = 'TV - Video - Audio in Azad Kashmir'
              mainHeading = 'TV - Video - Audio in Mirpur'
              
              />
            </div>    
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 col-sm-12">
                        <SideNavigationTv/>
                    </div>
                    <div className="col-md-9">
                        <PopularTop adds='20'/>
                        <hr/>
                        <PopularAdds/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PopularTvAudio
