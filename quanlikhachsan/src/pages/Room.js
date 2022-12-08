import React, { memo, useContext } from "react";
import { Link, Routes, Route, useLocation } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Free from "../components/rooms/Free";
import Booked from "../components/rooms/Booked";
import Clean from "../components/rooms/Clean";
import All from "../components/rooms/All";
import StatusRoom from "../components/rooms/StatusRoom";
import DayCheckIn from "../components/rooms/DayCheckIn";
import { AppContext } from "../Context/AppContext";
import CheckIn from "../components/rooms/CheckIn";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function Room() {
  let url = useLocation();
  const { dataAllRoom } = useContext(AppContext);
  const { dataFreeRoom } = useContext(AppContext);
  const { dataBookedRoom } = useContext(AppContext);
  const { dataCheckInRoom } = useContext(AppContext);
  const { dataCleanRoom } = useContext(AppContext);
  const [itemFree, setItemFree] = useState([]);
  const [itemBooked, setItemBooked] = useState([]);
  const [itemClean, setItemClean] = useState([]);
  const [itemCheckIn, setItemCheckIn] = useState([]);

  const getStatusRoom = (url) => {
    if (url.pathname === "/room/free") {
      return setDetailDay({ status_room: 1, status_bill: 1 });
    } else if (url.pathname === "/room/booked") {
      return setDetailDay({ status_room: 4, status_bill: 1 });
    } else if (url.pathname === "/room/checkin") {
      return setDetailDay({ status_room: 2, status_bill: 1 });
    } else if (url.pathname === "/room/clean") {
      return setDetailDay({ status_room: 3, status_bill: 1 });
    }
  };

  const token = JSON.parse(localStorage.getItem("token"));
  useEffect(() => {
    getStatusRoom(url);
  }, [url]);

  const handleFilterDate = (e) => {
    e.preventDefault();
    filterDate(detailDay);
  };

  const [detailDay, setDetailDay] = useState({
    from: "",
    to: "",
    status_room: "",
    status_bill: "",
  });

  //call api
  async function filterDate(detail) {
    // try {
      let res = await axios.get(
        `http://localhost:8000/room/filter?from=${detail.from}&to=${detail.to}&status_room=${detail.status_room}&status_bill=${detail.status_bill}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      res = await res.data;
      console.log(res)
      let Dm = [];
      res.forEach((element) => {
        element.forEach((item) => {
          Dm.push(item);
        });
      });

      if (url.pathname === "/room/free") {
        //1
        setItemFree(Dm);
      } else if (url.pathname === "/room/booked") {
        setItemBooked(Dm);
      } else if (url.pathname === "/room/checkin") {
        setItemCheckIn(Dm);
      } else if (url.pathname === "/room/clean") {
        setItemClean(Dm);
      }
    // } catch (error) {
      // console.log(error)
      //   // setError(JSON.parse(error.response.data));
    // }
  }

  /////////////////

  const countAllRoom = dataAllRoom.filter(function (count) {
    if (count.status !== 0) {
      return true;
    } else {
      return false;
    }
  }).length;
  const countFreeRoom = dataFreeRoom.filter(function (count) {
    if (count.status == 1) {
      return true;
    } else {
      return false;
    }
  }).length;
  const countBookedRoom = dataBookedRoom.filter(function (count) {
    if (count.status === 4) {
      return true;
    } else {
      return false;
    }
  }).length;
  const countCheckInRoom = dataCheckInRoom.filter(function (count) {
    if (count.status === 2) {
      return true;
    } else {
      return false;
    }
  }).length;
  const countCleanRoom = dataCleanRoom.filter(function (count) {
    if (count.status === 3) {
      return true;
    } else {
      return false;
    }
  }).length;

  return (
    // <!-- Begin Page Content -->
    <div className="container-fluid">
      {/* <!-- Page Heading --> */}
      <div className="card shadow mb-4">
        <div className="card-header py-3 d-flex justify-content-between">
          <h6 className="mt-2 font-weight-bold text-primary  ">
            Quản Lý Phòng{" "}
          </h6>

          <div className="">
            <Link
              type="button"
              to="/customer/add"
              className="btn btn-primary fw-bold"
            >
              + Thêm Khách Hàng
            </Link>
          </div>
        </div>

        <div className="card-body">
          <div className="table-responsive">
            <div className="  my-2 mr-5 ml-5">
              {/* form search  */}
              <form onSubmit={handleFilterDate}>
                <div className="row m-auto">
                  <div className="col-sm d-flex justify-content-end">
                    <div>
                      <label className="mr-3">Từ ngày</label>
                      <input
                        className="status-room"
                        type="date"
                        id="start"
                        name="trip-start"
                        onChange={(e) => {
                          setDetailDay({
                            ...detailDay,
                            from: e.target.value,
                          });
                        }}
                        defaultValue={detailDay?.form}
                      />
                    </div>
                  </div>

                  <div className="col-sm d-flex justify-content-end">
                    <div>
                      <label className="mr-3">Đến ngày</label>
                      <input
                        className="status-room"
                        type="date"
                        id="start"
                        name="trip-start"
                        onChange={(e) => {
                          setDetailDay({
                            ...detailDay,
                            to: e.target.value,
                          });
                        }}
                        defaultValue={detailDay?.to}
                      />
                    </div>
                  </div>

                  <div className="col-sm d-flex justify-content-center">
                    <input
                      className=" btn btn-primary"
                      type="submit"
                      value="Submit"
                    />
                  </div>
                </div>
                <br></br>
              </form>
            </div>
            <hr />
            <DayCheckIn />
            <hr />
            <StatusRoom />
          </div>
        </div>
      </div>

      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <Nav className="me-auto navbar_warapper btn-rooms">
            <Link className="btn-change-room nav-item nav-link " to="">
              <span
                className={
                  url.pathname === "/room" ? "hover-url font-weight-bold" : ""
                }
              >
                Tất cả
              </span>{" "}
              <span className="circle-red "> {countAllRoom ?? 0}</span>
            </Link>
            <Link
              className="btn-change-room nav-item nav-link hover-url"
              to="free"
            >
              <span
                className={
                  url.pathname === "/room/free"
                    ? "hover-url font-weight-bold"
                    : ""
                }
              >
                Trống
              </span>{" "}
              <span className="circle-red  ">{countFreeRoom ?? 0}</span>
            </Link>
            <Link className="btn-change-room nav-item nav-link " to="booked">
              <span
                className={
                  url.pathname === "/room/booked"
                    ? "hover-url font-weight-bold"
                    : ""
                }
              >
                Đã đặt
              </span>{" "}
              <span className="circle-red">{countBookedRoom ?? 0}</span>
            </Link>
            <Link className="btn-change-room nav-item nav-link " to="checkin">
              <span
                className={
                  url.pathname === "/room/checkin"
                    ? "hover-url font-weight-bold"
                    : ""
                }
              >
                {" "}
                Đang ở{" "}
              </span>{" "}
              <span className="circle-red">{countCheckInRoom ?? 0}</span>
            </Link>
            <Link className="btn-change-room nav-item nav-link " to="clean">
              <span
                className={
                  url.pathname === "/room/clean"
                    ? "hover-url font-weight-bold"
                    : ""
                }
              >
                {" "}
                Dọn dẹp{" "}
              </span>{" "}
              <span className="circle-red">{countCleanRoom ?? 0}</span>
            </Link>
          </Nav>
        </div>

        {/* content */}
        <Routes>
          <Route path="" element={<All />} />
          <Route path="free" element={<Free dataSortFree={itemFree} />} />
          <Route path="booked" element={<Booked dataSortBooked={itemBooked} />} />
          <Route path="checkin" element={<CheckIn dataSortCheckIn={itemCheckIn} />} />
          <Route path="clean" element={<Clean dataSortClean={itemClean} />} />
        </Routes>
        {/* content */}
      </div>
    </div>
    // <!-- /.container-fluid -->
  );
}

export default memo(Room);
