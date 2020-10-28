import React, {useState} from 'react'
import './CategDrop.css'
import CommonPopularHeader from './CommonPopularHeader'
import NavbarCat from './NavbarCat'
import PopularTop from './PopularTop'
import SideNavigationHouses from './SideNavigationHouses'
import './SideNavigationHouse.css'
import './PopularCommon.css'
import PopularAdHouse from './PopularAdHouse'


function PopularHouses() {

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
              search1 = 'house for sale'
              search2 = 'property'
              nav1 = 'Property for Sale'
              nav2 = 'Houses'
              nav3 = 'Houses in Azad Kashmir'
              mainHeading = 'Houses in Mirpur'
              
              />
            </div>   
            <div className='container-fluid'>
                    <div className="row">
                    <div className="col-md-3">
                    <SideNavigationHouses/>
                    </div>
                    <div className="col-md-9">
                        <PopularTop adds='9'/>
                        <hr/>
                        <PopularAdHouse/> <br/>
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

export default PopularHouses
