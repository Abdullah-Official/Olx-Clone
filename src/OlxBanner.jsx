import React from 'react'
import './OlxBanner.css'

function OlxBanner() {
    return (
        <>
        <div className="OlxBanner__MEDIA" >
        <div className="container-fluid banner__container">
            {/* <div className="container"> */}
                <div className="row">
                    
                    <div className="col-md-4 col-sm-12 col-lg-4 olx_mobileImage">
                        <img className='img-fluid' src="https://statics.olx.com.pk/external/base/img/phone-app.png" alt=""/>
                    </div>
                    <br/>
                    <div className="col-md-4 col-sm-12 my-3 col-lg-4 olx_App">
                        <div>
                        <strong className=""> try the olx app</strong>
                        <p className="mt-3">Buy, sell and find just about anything using the app on your mobile.</p>
                        </div>
                        <div className="verticle__line"></div>
                    </div>
                    <div className="col-md-4 col-sm-12 col-lg-4">
                        <div className='my-5'>
                            <div className="get_your_appText">
                                <strong>GET YOUR APP TODAY</strong>
                            </div>
                            <div className="appIcons mt-4">
                                <img className='img-fluid' width='400px' src="https://statics.olx.com.pk/external/base/img/appstore_2x.png" alt="IOS"/>
                                <img className="ml-3 img-fluid" src="https://statics.olx.com.pk/external/base/img/playstore_2x.png" alt="PLAYSTORE"/>
                            </div>
                        </div>
                    </div>
                </div>
                
            
        </div>
        </div>
        </>
    )
}

export default OlxBanner
