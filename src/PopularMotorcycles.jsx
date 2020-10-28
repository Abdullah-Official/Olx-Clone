import React, {useState} from 'react'
import CommonPopularHeader from './CommonPopularHeader'
import NavbarCat from './NavbarCat'
import PopularAdds from './PopularAdds'
import PopularAdMotor from './PopularAdMotor'
import PopularTop from './PopularTop'
import SideNavigationMotor from './SideNavigationMotor'

function PopularMotorcycles() {
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
                        <PopularAdMotor/>
                        <br/>
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

export default PopularMotorcycles
