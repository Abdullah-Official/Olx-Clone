import React from 'react'
import './FooterBottom.css'
function FooterBottom() {
    return (
        <>
            <div className="container-fluid mainDiv">
                <div className="row">
                    <div className="col-md-6 col-sm-10">
                        <div className="left">
                            <span className="boldOne pr-2">Other Countries </span>
                            <a href="" className="anchoR"> India - South Africa - Indonesia</a>
                        </div>
                    </div>
                    
                    <div className="col-md-6 col-sm-10">
                    <div className="right ">
                            <span className="boldOne pr-2">Free Classifieds in Pakistan </span>
                            <a href="" className="anchoR">. © 2006-2020 OLX</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FooterBottom
