/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import w1 from '../assets/store-chat-earth-day-specialist-icon-202404.jpg'
import access from '../assets/store-card-13-accessories-nav-202403.png'
import airpod from '../assets/store-card-13-airpods-nav-202209.png'
import airtag from '../assets/store-card-13-airtags-nav-202108.png'
import tv from '../assets/store-card-13-appletv-nav-202210.png'
import homepod from '../assets/store-card-13-homepod-nav-202301.png'
import iPad from '../assets/store-card-13-ipad-nav-202405.png'
import i13 from '../assets/store-card-13-iphone-nav-202309_GEO_EMEA.png'
import MAC from '../assets/store-card-13-mac-nav-202310.png'
import Watch from '../assets/store-card-13-watch-nav-202309_GEO_IN.png'

const Store = () => {
  return (
    <div className="bg-body-tertiary   ">
     <div className="container cont  ">
    <div className="row py-4 ">
        <div className="col-md-8 d-flex align-items-center   py-5  " >
            <h1 className="text-secondary "><span className="text-dark"> Store.</span> The best way to buy the products you love</h1>
        </div>
        <div className="col-md-4 ">
          <div className="d-flex gap-3  justify-content-end ">
            <div className="mr-3">
                <img src={w1} alt="Image" className="img-fluid rounded-5 "/>
            </div>
            <div className="d-flex flex-column align-content-center mt-3">
                <span>Need shopping help?</span>
                <span>Ask a Specialist</span>
            </div> 
            </div>
            <div className="d-flex gap-3   mt-5   justify-content-end ">               
            <div className="mr-3">
                <img src={w1} alt="Image" className="img-fluid rounded-5 "/>
            </div>
            <div className="d-flex flex-column align-content-center mt-3">
                <span>Need shopping help?</span>
                <span>Ask a Specialist</span>
            </div>
            </div>  
        </div>
    </div>
</div>
<div className="d-flex justify-content-evenly mt-5  ">
  <div className="d-flex flex-column  align-items-center  p-2  gap-4">
    <img src={access} alt = "" height="100px" width="140px" /><h5>accessories</h5>
  </div>
  <div className="d-flex flex-column  align-items-center p-2  gap-4">
    <img src={airpod} alt = "" height="100px" width="140px"/><h5>airpods</h5>
  </div>
  <div className="d-flex flex-column  align-items-center p-2  gap-4">
    <img src={airtag} alt = "" height="100px" width="140px"/><h5>airtags</h5>
  </div>
  <div className="d-flex flex-column  align-items-center p-2  gap-4">
    <img src={tv} alt = "" height="100px" width="140px"/><h5>appletv</h5>
  </div>
  <div className="d-flex flex-column  align-items-center p-2  gap-4">
    <img src={homepod} alt = "" height="100px" width="140px"/><h5>homepod</h5>
  </div>
  <div className="d-flex flex-column  align-items-center p-2  gap-4">
    <img src={iPad} alt = "" height="100px" width="140px"/><h5>ipad</h5>
  </div>
  <div className="d-flex flex-column  align-items-center p-2  gap-4">
    <img src={i13} alt = "" height="100px" width="140px"/><h5>Iphone</h5>
  </div>
  <div className="d-flex flex-column  align-items-center p-2  gap-4">
    <img src={MAC} alt = "" height="100px" width="140px"/><h5>Mac</h5>
  </div>
  <div className="d-flex flex-column  align-items-center   p-2  gap-4">
    <img src={Watch} alt = "" height="100px" width="140px"/><h5>Watch</h5>
  </div>
</div>

    </div>
  )
}

export default Store
