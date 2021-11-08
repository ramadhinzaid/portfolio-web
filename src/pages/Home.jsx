import React, { useState } from "react";

const Home = () => {
  const [hoverBtn, setHover] = useState(false);
  function onHoverbtn() {
    setHover(!hoverBtn);
  }
  return (
    <div className="row mx-0 vh-100 text-white position-relative">
      <div className="col-lg-6 secondary-bg vh-100">
        <div className="row mx-0 h-100 w-100 align-items-center ">
          <div>
            <h1 className="text-md-center text-center text-lg-start">
              Ramadhin Zaid
            </h1>
            <h3 className="text-md-center text-center text-lg-start">
              Just man with nothing
            </h3>
          </div>
        </div>
      </div>
      <div className="col-lg-6 primary-bg">right side</div>
      <div 
      className="position-absolute d-flex justify-content-center btn-what-base">
        <div className="position-absolute do text-center row">
          <div
            style={{
              height: "90px",
              width: "90px",
            }}
            className={`border mx-2 rounded-circle text-center  ${
              hoverBtn ? `animationFade` : `hide`
            }`}
          >
            <p className="none mb-0">Mobile</p>
          </div>
          <div
            style={{
              height: "90px",
              width: "90px",
            }}
            className={`border website mx-2 rounded-circle text-center ${
              hoverBtn ? `animationFade` : `hide`
            }`}
          >
            <p className="none mb-0">Website</p>
          </div>
        </div>
        <button
          onClick={onHoverbtn}
          className="btn-what p-3 border rounded-pill"
        >
          What can i do
        </button>
      </div>
    </div>
  );
};

export default Home;
