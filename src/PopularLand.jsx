import React, {useState} from 'react'
import CommonPopularHeader from './CommonPopularHeader'
import NavbarCat from './NavbarCat'
import PopularAdds from './PopularAdds'
import PopularTop from './PopularTop'
import SideNavigationLand from './SideNavigationLand'
import PopularAdLand from './PopularAdLand'

function PopularLand() {
    const [fresh,setFresh] = useState('')

    const loadMore = () =>{
        setFresh(()=>{
            return <p className=' my-3 alert alert-danger alert-dismissible fade show'>Sorry ! there are no more ADD's ..
            <i className="close" style={{cursor:'pointer'}} data-dismiss="alert" aria-label="Close">&times;</i>
            </p>
            
        })
    }
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
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 col-sm-12">
                        <SideNavigationLand/>
                    </div>
                    <div className="col-md-9 col-sm-12">
                        <PopularTop adds='17'/>
                        <hr/>
                        <PopularAdLand/> <br/>
                        <div className="container">
                        {fresh}
                        <div className="buttonLoad ml-5 my-3">
                            <button onClick={loadMore}>Load More</button>
                        </div>
                        </div>
                    </div>
                </div> <br/> <br/>
            </div>
        </>
    )
}

export default PopularLand
