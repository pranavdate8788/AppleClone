/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import w1 from "../assets/store-chat-earth-day-specialist-icon-202404.jpg";
import access from "../assets/store-card-13-accessories-nav-202403.png";
import airpod from "../assets/store-card-13-airpods-nav-202209.png";
import airtag from "../assets/store-card-13-airtags-nav-202108.png";
import tv from "../assets/store-card-13-appletv-nav-202210.png";
import homepod from "../assets/store-card-13-homepod-nav-202301.png";
import iPad from "../assets/store-card-13-ipad-nav-202405.png";
import i13 from "../assets/store-card-13-iphone-nav-202309_GEO_EMEA.png";
import MAC from "../assets/store-card-13-mac-nav-202310.png";
import Watch from "../assets/store-card-13-watch-nav-202309_GEO_IN.png";

import store1 from "../assets/Store/store-card-40-ipad-202310_GEO_IN.jpg";
import store2 from "../assets/Store/store-card-40-ipad-air-202405.jpg";
import store3 from "../assets/Store/store-card-40-ipad-pro-202405.jpg";
import store4 from "../assets/Store/store-card-40-iphone-15-202309.jpg";
import store5 from "../assets/Store/store-card-40-iphone-15-pro-202309.jpg";
import store6 from "../assets/Store/store-card-40-macbook-air-202402.jpg";
import store7 from "../assets/Store/store-card-40-macbook-pro-202310.jpg";
import store8 from "../assets/Store/store-card-40-watch-s9-202309_GEO_IN.jpg";
import store9 from "../assets/Store/store-card-40-watch-ultra-202309_GEO_IN.jpg";

const Store = () => {
  return (
    <div className="bg-body-tertiary   ">
      <div className="container cont  ">
        <div className="row py-2 ">
          <div className="col-md-8 d-flex align-items-center   py-5  ">
            <h1 className="text-secondary ">
              <span className="text-dark"> Store.</span> The best way to buy the
              products you love
            </h1>
          </div>
          <div className="col-md-4 ">
            <div className="d-flex gap-3  justify-content-end ">
              <div className="mr-3">
                <img
                  src={w1}
                  alt="Image"
                  className="img-fluid rounded-5 "
                />
              </div>
              <div className="d-flex flex-column align-content-center mt-3">
                <span>Need shopping help?</span>
                <span>Ask a Specialist</span>
              </div>
            </div>
            <div className="d-flex gap-3   mt-5   justify-content-end ">
              <div className="mr-3">
                <img
                  src={w1}
                  alt="Image"
                  className="img-fluid rounded-5 "
                />
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
        <div className="d-flex flex-column  align-items-center  p-2 ">
          <img src={access} alt="" height="100px" width="140px" />
          <h5 className="mt-3">accessories</h5>
        </div>
        <div className="d-flex flex-column  align-items-center p-2 ">
          <img src={airpod} alt="" height="100px" width="140px" />
          <h5 className="mt-3">airpods</h5>
        </div>
        <div className="d-flex flex-column  align-items-center p-2 ">
          <img src={airtag} alt="" height="100px" width="140px" />
          <h5 className="mt-3">airtags</h5>
        </div>
        <div className="d-flex flex-column  align-items-center p-2 ">
          <img src={tv} alt="" height="100px" width="140px" />
          <h5 className="mt-3">appletv</h5>
        </div>
        <div className="d-flex flex-column  align-items-center p-2 ">
          <img src={homepod} alt="" height="100px" width="140px" />
          <h5 className="mt-3">homepod</h5>
        </div>
        <div className="d-flex flex-column  align-items-center p-2 ">
          <img src={iPad} alt="" height="100px" width="140px" />
          <h5 className="mt-3">ipad</h5>
        </div>
        <div className="d-flex flex-column  align-items-center p-2 ">
          <img src={i13} alt="" height="100px" width="140px" />
          <h5 className="mt-3">Iphone</h5>
        </div>
        <div className="d-flex flex-column  align-items-center p-2 ">
          <img src={MAC} alt="" height="100px" width="140px" />
          <h5 className="mt-3">Mac</h5>
        </div>
        <div className="d-flex flex-column  align-items-center   p-2 ">
          <img src={Watch} alt="" height="100px" width="140px" />
          <h5 className="mt-3">Watch</h5>
        </div>
      </div>
      <div>
        <h2 className="text-secondary heading py-4 mx-4  ">
          <span className="text-dark"> The latest.</span>
          Take a look at what’s new right now.
        </h2>
<div
  id="carouselExample"
  class="carousel slide w-100"
  data-bs-ride="carousel"
>
  <div class="carousel-inner mx-5 ">
    <div class="carousel-item    active">
      <div class="row justify-content-center">
        <div class="col-4 position-relative">
          <div class="position-absolute mx-5 my-4 z-1  ">
            <h6 class="text-secondary">IPAD</h6>
            <h2 class="text-dark mx-1">
              Lovable. Drawable. <br /> Magical
            </h2>
            <span class="text-dark">From ₹34900.00‡</span>
          </div>
          <img
            src={store1} 
            class="img-fluid rounded-5 img-hover"
            alt="Slide 1"
          />
        </div>
        <div class="col-4 position-relative">
          <div class="position-absolute mx-5 my-4 z-1  ">
            <h6 class="text-secondary">IPAD AIR</h6>
            <h2 class="text-dark mx-1">Fresh Air.</h2>
            <span class="text-dark">From ₹59900.00‡</span>
          </div>
          <img
            src={store2} 
            class="img-fluid rounded-5 img-hover"
            alt="Slide 2"
          />
        </div>
        <div class="col-4 position-relative">
          <div class="position-absolute mx-5 my-4 z-1  ">
            <h6 class="text-light">IPAD PRO</h6>
            <h2 class="text-light mx-1">Thinpossible.</h2>
            <span class="text-light">From ₹99900.00‡</span>
          </div>
          <img
            src={store3} 
            class="img-fluid rounded-5 img-hover"
            alt="Slide 3"
          />
        </div>
      </div>
    </div>
    <div class="carousel-item     ">
      <div class="row justify-content-center">
        <div class="col-4 position-relative">
          <div class="position-absolute mx-5 my-4 z-1  ">
            <h6 class="text-secondary">IPHONE 15</h6>
            <h2 class="text-dark mx-1">Newphoria.</h2>
            <span class="text-dark">
              From ₹3329.00/mo. for 24 mo. with No Cost EMI
            </span>
          </div>
          <img
            src={store4} 
            class="img-fluid rounded-5 img-hover"
            alt="Slide 4"
          />
        </div>
        <div class="col-4 position-relative">
          <div class="position-absolute mx-5 my-4 z-1  ">
            <h6 class="text-light">IPHONE 15 PRO</h6>
            <h2 class="text-light mx-1">Titanium</h2>
            <span class="text-light">
              From ₹5621.00/mo. for 24 mo. with No Cost EMI
            </span>
          </div>
          <img
            src={store5}
            class="img-fluid rounded-5 img-hover"
            alt="Slide 5"
          />
        </div>
        <div class="col-4 position-relative">
          <div class="position-absolute mx-5 my-4 z-1  ">
            <h6 class="text-secondary">MACKBOOK AIR</h6>
            <h2 class="text-dark mx-1">Designed to go places.</h2>
            <span class="text-dark">From ₹99900.00‡</span>
          </div>
          <img
            src={store6} 
            class="img-fluid rounded-5 img-hover"
            alt="Slide 6"
          />
        </div>
      </div>
    </div>
    <div class="carousel-item     ">
      <div class="row justify-content-center">
        <div class="col-4 position-relative">
          <div class="position-absolute mx-5 my-4 z-1  ">
            <h6 class="text-secondary">MACKBOOK PRO</h6>
            <h2 class="text-dark mx-1">
              Mind-blowing. <br /> Head-turning.
            </h2>
            <span class="text-dark">From ₹169900.00‡</span>
          </div>
          <img
            src={store7}
            class="img-fluid rounded-5 img-hover"
            alt="Slide 7"
          />
        </div>
        <div class="col-4 position-relative">
          <div class="position-absolute mx-5 my-4 z-1  ">
            <h6 class="text-light">APPLE WATCH SERIES 9</h6>
            <h2 class="text-light mx-1">Smarter. Brighter. <br/> Mightier.</h2>
            <span class="text-light">From ₹41900.00‡</span>
          </div>
          <img
            src={store8}
            class="img-fluid rounded-5 img-hover"
            alt="Slide 8"
          />
        </div>
        <div class="col-4 position-relative">
          <div class="position-absolute mx-5 my-4 z-1  ">
            <h6 class="text-secondary">APPLE WATCH ULTRA 2</h6>
            <h2 class="text-dark mx-1">Next-level adventure.</h2>
            <span class="text-dark">From ₹89900.00‡</span>
          </div>
          <img
            src={store9}
            class="img-fluid rounded-5 img-hover"
            alt="Slide 9"
          />
        </div>
      </div>
    </div>
  </div>
  <button
    class="carousel-control-prev btn"
    data-bs-target="#carouselExample"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon text-dark p-3"></span>
  </button>
  <button
    class="carousel-control-next btn"
    data-bs-target="#carouselExample"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon text-dark p-3"></span>
  </button>
</div>

      </div>
    </div>
  );
};

export default Store;
