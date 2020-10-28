import React, {useState} from 'react'
import CommonPopularHeader from './CommonPopularHeader'
import NavbarCat from './NavbarCat'
import PopularAdds from './PopularAdds'
import PopularAdTv from './PopularAdTv'
import PopularTop from './PopularTop'
import SideNavigationTv from './SideNavigationTv'

function PopularTvAudio() {
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
                        <PopularAdTv/> <br/>
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

export default PopularTvAudio
