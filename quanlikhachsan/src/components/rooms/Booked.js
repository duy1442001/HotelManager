import React, { useContext, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { AppContext } from "../../Context/AppContext";
import OderRoomForm from "../handleroom/OderRoomForm";
import PulseLoader from "react-spinners/PulseLoader";
import axios from "axios";

function Booked({ dataSortBooked }) {
  const token = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
    setLoadingData(true);
    setTimeout(() => {
      setLoadingData(false);
    }, 5000);
  }, []);
  let dataSort = dataSortBooked;

  //////////////////// get data
  const { dataBookedRoom } = useContext(AppContext);
  console.log("dataBookedRoom", dataBookedRoom);

  const [loadingData, setLoadingData] = useState(false);

  const dataOfBookedRoom = dataBookedRoom.filter(function (BookedRoom) {
    return BookedRoom.status === 4;
  });

  const data = dataSort.length == 0 ? dataOfBookedRoom : dataSort;

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
      <h6 className="m-0 font-weight-bold text-primary">Đã đặt</h6>
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
                      <div className="d-flex justify-content-center"></div>

                      <div className="text-center ">
                        {/* <!-- Product name--> */}
                        <h4 className="fw-bolder">{item.name_room}</h4>

                        {/* <!-- Product price--> */}
                        <h6 className="fw-bolder">
                          Giá : {item.price + " vnd"}
                        </h6>
                        <br />
                      </div>
                    </div>

                    {/* <!-- Product actions--> */}
                    <div className="card-footer p-2 pt-0 border-top-0 bg-transparent">
                      <div className="text-center">
                        <a
                          className="btn btn-outline-dark mt-2 mb-2 white  bg-dark white"
                          type="button"
                          onClick={async function handlePay() {
                            let res = await axios.post(
                              `http://localhost:8000/bill/checkin?room_id=${item.id}`,"",
                              {
                                headers: {
                                  "Content-Type": "application/json",
                                  Authorization: `Bearer ${token}`,
                                },
                              }
                            );
                            alert("Check in thành công !")
                            window.location = "/room/checkin";
                            console.log(" pay", res);
                          }}
                        >
                          Check in
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
            {/* product */}
          </div>
        </div>
      </section>
    </div>
  );
}
export default Booked;
