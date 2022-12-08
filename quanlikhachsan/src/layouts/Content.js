import React, { useEffect } from "react";
import { memo } from "react";

function Content() {
 
    useEffect(() => {
      var getUSATime = function () {
        document.getElementById("USATime").innerHTML =
          new Date().toLocaleString("en-US", {
            timeZone: "America/New_York",
            timeStyle: "medium",
            hourCycle: "h23",
          });
      };
      getUSATime();
      const myInterval = setInterval(getUSATime, 1000);
      return()=>{
        clearInterval(myInterval)
      }

    },[]);

    useEffect(() => {
      var getVNTime = function () {
        document.getElementById("VNTime").innerHTML =
          new Date().toLocaleString("en-US", { timeZone: "Asia/Ho_Chi_Minh", timeStyle: "medium", hourCycle: "h23" });
      };
      getVNTime();
      const myInterval = setInterval(getVNTime, 1000);
      return()=>{
        clearInterval(myInterval)
      }
    },[]);


    useEffect(() => {
      var getJPTime = function () {
        document.getElementById("JPTime").innerHTML =
          new Date().toLocaleString("en-US", { timeZone: "Asia/Tokyo", timeStyle: "medium", hourCycle: "h23" });
      };
      getJPTime();
      const myInterval = setInterval(getJPTime, 1000);
      return()=>{
        clearInterval(myInterval)
      }
    },[]);


    useEffect(() => {
      var getUSUKTime = function () {
        document.getElementById("USUKTime").innerHTML =
          new Date().toLocaleString("en-US", { timeZone: "Europe/London", timeStyle: "medium", hourCycle: "h23" });
      };
      getUSUKTime();
      const myInterval = setInterval(getUSUKTime, 1000);
      return()=>{
        clearInterval(myInterval)
      }
    },[]);

  

  ///
  return (
    <div className="container-fluid">
      {/* <!-- Page Heading --> */}
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-dark-800 font-weight-bold ">Giờ Quốc Tế</h1>
       
      </div>

      {/* <!-- Content Row --> */}
      <div className="row">
        {/* <!-- Earnings (Monthly) Card Example --> */}
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-danger shadow h-100 py-2 bg-light">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="h5 text-xs font-weight-bold text-dark text-uppercase mb-1">
                    Hà Nội
                  </div>
                  <div
                    id="VNTime"
                    className="h5 mb-0 font-weight-bold text-gray-800"
                  ></div>
                </div>
                <div className="col-auto">
                  <i className=" fa-2x text-gray-300">
                    <span className="fi fi-vn"></span>{" "}
                  </i>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Earnings (Monthly) Card Example --> */}
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-danger shadow h-100 py-2 bg-light">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="h5 text-xs font-weight-bold text-dark text-uppercase mb-1">
                    New York
                  </div>
                  <div
                    id="USATime"
                    className="h5 mb-0 font-weight-bold text-gray-800"
                  ></div>
                </div>
                <div className="col-auto">
                  <i className=" fa-2x text-gray-300">
                    <span className="fi fi-us"></span>{" "}
                  </i>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Earnings (Monthly) Card Example --> */}
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-danger shadow h-100 py-2 bg-light">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="h5 text-xs font-weight-bold text-dark text-uppercase mb-1">
                    Nhật Bản
                  </div>
                  <div
                    id="JPTime"
                    className="h5 mb-0 font-weight-bold text-gray-800"
                  ></div>
                </div>
                <div className="col-auto">
                  <i className=" fa-2x text-gray-300">
                    <span className="fi fi-jp"></span>{" "}
                  </i>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Pending Requests Card Example --> */}
        <div className="col-xl-3 col-md-6 mb-4 ">
          <div className="card border-left-danger shadow h-100 py-2 bg-light">
            <div className="card-body ">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="h5 text-xs font-weight-bold text-dark text-uppercase mb-1">
                    London
                  </div>
                  <div
                    id="USUKTime"
                    className="h5 mb-0 font-weight-bold text-gray-800"
                  ></div>
                </div>
                <div className="col-auto">
                  <i className=" fa-2x text-gray-300 ">
                    <span className="fi fi-gb"></span>{" "}
                  </i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Content Row --> */}
    </div>
  );
}

export default memo(Content);
