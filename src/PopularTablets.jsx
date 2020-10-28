import React,{useState} from 'react'
import CommonPopularHeader from './CommonPopularHeader'
import NavbarCat from './NavbarCat'
// import PopularAdds from './PopularAdds'
import PopularTop from './PopularTop'
import PopularAdTab from './PoupularAdTab'
import SideNavigationTablet from './SideNavigationTablet'

function PopularTablets() {
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
                       <PopularTop adds='13'/> 
                        <hr/>

                        <PopularAdTab adds='12'/> <br/>
                        <div className="container">
                        {fresh}
                        <div className="buttonLoad ml-5 my-3">
                            <button onClick={loadMore}>Load More</button>
                        </div>
           
                        </div>
                    </div> 
                    </div> 
               
                <br/> <br/>
            </div> 
        </>
    )
}

export default PopularTablets
