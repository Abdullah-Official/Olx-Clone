import React,{useState} from 'react'
import CommonPopularHeader from './CommonPopularHeader'
import NavbarCat from './NavbarCat'
import PopularAdCar from './PopularAdCar'
import PopularTop from './PopularTop'
import SideNavigationCar from './SideNavigationCar'
import './SideNavigationCar.css'

function PopularCars() {
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
                    <PopularAdCar/> <br/>
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

export default PopularCars
