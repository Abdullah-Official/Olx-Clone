import React,{useState} from 'react'
import CommonPopularHeader from './CommonPopularHeader'
import NavbarCat from './NavbarCat'
import PopJumbortron from './PopJumbortron'
import PopularAdds from './PopularAdds'
import PopularAdMob from './PopularAdMob'
import './PopularCommon.css'
import PopularTop from './PopularTop'
import SideNavigationMob from './SideNavigationMob'

function PopularMob() {
  
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
              search1 = 'iphone'
              search2 = 'samsung'
              nav1 = 'Mobiles'
              nav2 = 'Mobile Phones'
              nav3 = 'Mobile Phones in Azad Kashmir'
              mainHeading = 'Mobile Phones in Mirpur'
              
              />
            </div>
            
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-3 col-sm-12"> <br/>
                <div className="sideBar">
              <SideNavigationMob/>
            </div>
            
                </div>
                <div className="col-md-9 col-sm-12">
                 <PopularTop adds='494'/>
                  <hr/>
              <PopularAdMob /> 
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

export default PopularMob
