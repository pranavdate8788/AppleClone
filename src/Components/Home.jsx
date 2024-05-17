import React from "react";
import Ipad from "../assets/ipad.jpg";
import Iphone from "../assets/phone.jpg";
import Mac from "../assets/mac.jpg";
import women from "../assets/women.jpg";
import laptop from "../assets/laptop.jpg";
import watch from "../assets/watch.jpg";
import iphone15 from "../assets/ihphone15.jpg";

import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import img5 from "../assets/5.png";

const Home = () => {
  return (
    <div className="w-100 flex-column d-flex  gap-2 ">
      <div className="bg-danger position-relative d-flex justify-content-center ">
        <div className="position-absolute mt-5 d-flex flex-column align-items-center">
          <h1 className="text-light custom-header">iPad Pro</h1>
          <p className="text-light fs-2">
            Unbelievably thin. Incredibly powerful.
          </p>
          <div className="d-flex gap-4 ">
            <button className="btn btn-primary rounded-5 px-3 text-light">
              Learn more
            </button>
            <button className="btn  rounded-5 px-3 text-primary border border-primary">
              Buy
            </button>
          </div>
        </div>
        <img src={Ipad} className="" width="100%" alt="" />
      </div>
      <div className="w-100  position-relative d-flex justify-content-center ">
        <div className="position-absolute mt-5 d-flex flex-column align-items-center">
          <h1 className="text-light custom-header">iPhone 15 Pro</h1>
          <p className="text-light fs-2">
            Titanium. So strong. So light. So Pro.
          </p>
          <div className="d-flex gap-4 ">
            <button className="btn btn-primary rounded-5 px-3 text-light">
              Learn more
            </button>
            <button className="btn  rounded-5 px-3 text-primary border border-primary">
              Buy
            </button>
          </div>
        </div>
        <img src={Iphone} width="100%" alt="" />
      </div>
      <div className="w-100 position-relative d-flex justify-content-center">
        <div className="position-absolute mt-5 d-flex flex-column align-items-center ">
          {/* <h1 className="text-light custom-header">iPhone 15 Pro</h1> */}
          <p className="text-dark fs-2 mt-5 py-2">
            Two sizes. Faster chip. Does it all.
          </p>
          <div className="d-flex gap-4 ">
            <button className="btn btn-dark rounded-5 px-3 text-light">
              Learn more
            </button>
            <button className="btn  rounded-5 px-3 text-dark border border-dark">
              Buy
            </button>
          </div>
        </div>
        <img src={Mac} width="100%" alt="" />
      </div>

      <div className="d-flex flex-wrap justify-content-center gap-2   ">
        <div className="  position-relative d-flex justify-content-center ">
          <div className="position-absolute bottom-0 my-5 d-flex flex-column align-items-center">
            <h1 className="text-light fs-1 ">Relax,it's iPhone</h1>
            <p className="text-light fs-4">Dependably durable.</p>
            <div className="d-flex gap-4 ">
              <button className="btn btn-light rounded-5 px-3 text-dark">
                Learn more
              </button>
            </div>
          </div>
          <img src={women} className="" width="800px" height="580px" alt="" />
        </div>
        <div className="  position-relative d-flex justify-content-center ">
          <div className="position-absolute mt-5 d-flex flex-column align-items-center">
            <h1 className="text-dark ">iPhone 15</h1>
            <p className="text-dark fs-4">New design. New camera. Newphoria.</p>
            <div className="d-flex gap-4 ">
              <button className="btn btn-primary rounded-5 px-3 text-light">
                Learn more
              </button>
              <button className="btn  rounded-5 px-3 text-primary border border-primary">
                Buy
              </button>
            </div>
          </div>
          <img
            src={iphone15}
            className=""
            width="800px"
            height="580px"
            alt=""
          />
        </div>
        <div className="  position-relative d-flex justify-content-center ">
          <div className="position-absolute mt-5 d-flex flex-column align-items-center">
            <h1 className="text-dark fs-1 ">MackBook Air</h1>
            <p className="text-dark fs-4">Supercharged By M3.</p>
            <div className="d-flex gap-4 ">
              <button className="btn btn-primary rounded-5 px-3 text-light">
                Learn more
              </button>
              <button className="btn  rounded-5 px-3 text-primary border border-primary">
                Buy
              </button>
            </div>
          </div>
          <img src={laptop} className="" width="800px" height="580px" alt="" />
        </div>
        <div className="  position-relative d-flex justify-content-center ">
          <div className="position-absolute  d-flex flex-column align-items-center watch">
            <p className="text-light  fs-4">Smarter. Brighter. Mighter.</p>
            <div className="d-flex gap-4 ">
              <button className="btn btn-primary rounded-5 px-3 text-light">
                Learn more
              </button>
              <button className="btn  rounded-5 px-3 text-primary border border-primary">
                Buy
              </button>
            </div>
          </div>
          <img src={watch} className="" width="800px" height="580px" alt="" />
        </div>
      </div>
      <div className="bg-dark d-flex justify-content-center">
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="2000">
            <img src={img1} className="d-block w-100" alt="Slide 1" />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={img2} className="d-block w-100" alt="Slide 2" />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={img3} className="d-block w-100" alt="Slide 3" />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={img4} className="d-block w-100" alt="Slide 4" />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={img5} className="d-block w-100" alt="Slide 5" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    </div>
  );
};

export default Home;
