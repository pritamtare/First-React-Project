import React from "react";
import prod1 from "../src/Image/mainImg.jpg";

const Home = () => {
  return (
    <><div className="container">
      <div className="Home-main row d-flex align-items-center ">
        <div className=" main-text col-sm-12 col-lg-6  p-5 my-5 " >
          <h3 className="py-3" style={{color:'grey'}}>Welcome...</h3>
          <h1>Get Started With<strong className="text-primary"> Pritam Tare</strong></h1>
          <p className="py-3"  style={{color:'grey'}}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium harum voluptates modi animi sapiente unde quasi nam
            soluta odit aspernatur!
          </p>
          <button className="btn btn-primary" style={{borderRadius:'0px'}}>Get Saterted</button>
        </div>

        <div class="center main-img col-sm-12 col-lg-6   ">
          <img className="center" src={prod1} alt="" />
        </div>
      </div>
      </div>
    </>
  );
};
export default Home;
