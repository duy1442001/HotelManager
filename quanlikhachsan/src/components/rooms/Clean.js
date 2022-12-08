import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../Context/AppContext";
import PulseLoader from "react-spinners/PulseLoader";



function Clean() {

  useEffect(() => {
    setLoadingData(true);
    setTimeout(() => {
      setLoadingData(false);
    }, 5000);
  }, []);
  //get data
  const {dataCleanRoom} = useContext(AppContext)
  const [loadingData, setLoadingData] = useState(false);


  
    const dataOfCleanRoom = dataCleanRoom.filter(function(FreeRoom){
      return FreeRoom.status === 3
      })
  const data = dataOfCleanRoom;



  

  const className = (status) => {
    if (status === 1) {
      return "card bg-primary decription-room";
    } else if (status === 4) {
      return "card bg-warning decription-room";
    } else if (status === 3) {
      return "card bg-danger decription-room";
    } else if (status === 2) {
      return "card bg-success decription-room";
    }
  };

  ////////////////////

  return (
    <div className="card-body white">
      <h6 className="m-0 font-weight-bold text-primary">Dọn dẹp</h6>
      <hr />
      <section className="py-2">
        <div className="container px-2 px-lg-2 mt-0">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {/* product */}

            {data.length == 0 ? (
              <>
              {loadingData ? (
                <PulseLoader
                  className="justify-content-center hight-load load-spinner mt-4"
                  color="#007bff"
                  loading={loadingData}
                  data-testid="loader"
                  size={12}
                  speedMultiplier={1}
                />
              ) : (
                <div className="d-flex justify-content-center mt-2 pt-2">
                <p className="  hight-load load-spinner text-dark">
                  Không có dữ liệu
                </p>
                </div>
              )}
            </>
            ) : (
              data.length > 0 &&
              data.map((item) => (
              <div className="col mb-2 " key={item.id}>
                <div className={className(item.status)}>
                  {/* <!-- Product details--> */}
                  <div className="card-body p-2">
                    {/* icon */}
                    <div className="d-flex justify-content-center"></div>
                    {/* icon */}

                    <div className="text-center ">
                      {/* <!-- Product name--> */}
                      {/* <h5 className="fw-bolder">Thường | 301</h5> */}
                      <h4 className="fw-bolder">{item.name_room}</h4>

                      {/* <!-- Product price--> */}
                      <h6 className="fw-bolder">Giá : {item.price + " vnd"}</h6>
                      <br />
                      {/* day */}
                      {/* 17/10/2022
                    <br />
                    19/10/2022 */}
                    </div>
                  </div>

                  {/* <!-- Product actions--> */}
                  <div className="card-footer p-2 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      <a
                        className="btn btn-outline-dark mt-2 mb-2 white  bg-dark white"
                        href="#"
                      >
                        Dọn Dẹp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )) )}
            {/* product */}
          </div>
        </div>
      </section>
    </div>
  );
}
export default Clean;
