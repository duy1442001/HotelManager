import React, { useContext, useState } from "react";
import { AppContext } from "../../Context/AppContext";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function OderRoomForm({ dataItem }) {
  const { customerData, serviceData } = useContext(AppContext);
  const dataCustomer = customerData;

  const [idCustomer, setIdCustomer] = useState("0");

  const [dayCome, setDayCome] = useState();
  const [dayGo, setDayGo] = useState();

  const [amountService, setAmountService] = useState(0);
  const [priceService, setPriceService] = useState(0);
  const [idService, setIdService] = useState(serviceData[0].id);

  const [sumService, setSumService] = useState("0");
  const [sumBill, setSumBill] = useState("0");

  const [errorDayIn, setErrorDayIn] = useState("");
  const [errorDayOut, setErrorDayOut] = useState("");
  const [error, setError] = useState("");

  const token = JSON.parse(localStorage.getItem("token"));

  const history = useNavigate();

  const handleSumService = (e) => {
    e.preventDefault();
    setSumService(priceService * amountService);
    setSumBill(priceService * amountService + dataItem[2]);
    setDetails({
      client_id: idCustomer,
      room_id: dataItem[0],
      day_in: dayCome,
      day_out: dayGo,
      total_room_rate: dataItem[2],
      total_service_fee: priceService * amountService,
      total_money: priceService * amountService + dataItem[2],
      service_id: idService,
      amount: amountService,
    });

    const getData = new FormData(e.target)
    // const data = Object.fromEntries(getData.entries())
    console.log("data",getData)

  };

  const [details, setDetails] = useState({
    client_id: "",
    room_id: "",
    day_in: "",
    day_out: "",
    total_room_rate: "",
    total_service_fee: "",
    total_money: "",
    service_id: "",
    amount: "",
  });

  const handleOderBill = (e) => {
    e.preventDefault();

    addBill(details);
  };

  //call api
  async function addBill(detail) {
    // try {
    let res = await axios.post("http://localhost:8000/bill/create", detail, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    res = await res;
    window.location = "/room";
    alert("Đặt phòng thành công !");
    // } catch (error) {
    //   setErrorDayIn(JSON.parse(error.response.data).day_in[0]);
    //   setErrorDayOut(JSON.parse(error.response.data).day_out[0]);
    // }
  }


  return (
    <>
      {/* modal */}
      <div
        className="modal fade"
        id="OderRoomModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            {/* header */}
            <div className="modal-header">
              <h4 className="modal-title text-dark" id="exampleModalLabel ">
                Thông tin đặt phòng
              </h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            {/* header */}

            {/* body */}
            <div className="modal-body text-dark">
              <form>
                {/* thông tin khách hàng */}
                <h5 className="my-3">Thông tin khách hàng </h5>
                <div className="line-page "></div>

                <div className="form-group row mt-3">
                  <div className="col-sm-6">
                    <label htmlFor="inputLastname">Mã khách hàng :</label>
                    <input
                      disabled={true}
                      type="text"
                      className="form-control bg-white"
                      id="maKH"
                      name='maKH'
                      placeholder="Điền mã khách hàng ..."
                      onChange={(e) => {
                        setIdCustomer({
                          ...idCustomer,
                          id: e.target.value,
                        });
                  
                      }}
                      value={idCustomer ? idCustomer : ""}
                    />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="inputLastname">Tên khách hàng :</label>

                    <select
                      id="cars"
                      className="form-control"
                      onChange={(e) => {
                        const selectIdCustomer = e.target.value;
                        setIdCustomer(selectIdCustomer);
                      }}
                    >
                      {" "}
                      Tên khách hàng :<option>Khách hàng</option>
                      {dataCustomer.map((item) => (
                        <option key={item.id} value={item.id}>
                          {" "}
                          KH-
                          {item.id} {item.firtname} {item.lastname}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                {/* thông tin khách hàng */}

                {/* thông tin phòng */}
                <div className="line-page mt-5 "></div>

                <h5 className="my-3">Thông tin phòng </h5>
                <div className="line-page "></div>

                <div className="form-group row mt-3">
                  <div className="col-sm-6">
                    <label htmlFor="inputLastname">Tên phòng :</label>
                    <input
                      disabled={true}
                      type="text"
                      className="form-control bg-white"
                      id="tenPhong"
                      name="ten"
                      placeholder="Điền tên phòng ..."
                      defaultValue={dataItem[1]}
                    />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="inputLastname">Giá Phòng :</label>
                    <input
                      disabled={true}
                      type="text"
                      className="form-control bg-white"
                      id="giaphong"
                      name="gia"
                      placeholder="Điền giá phòng ..."
                      defaultValue={dataItem[2]}
                    />
                  </div>
                </div>

                <div className="form-group row mt-3">
                  <div className="col-sm-6">
                    <label htmlFor="inputLastname">Ngày đến :</label>
                    <p className="text-danger">{errorDayIn}</p>

                    <input
                      type="date"
                      className="form-control"
                      id="ngayden"
                      name="ngayden"
                      placeholder="Điền ngày đến ..."
                      onChange={(e) => {
                        const dayCome = e.target.value;

                        setDayCome(dayCome);
                      }}
                    />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="inputLastname">Ngày đi :</label>
                    <p className="text-danger">{errorDayOut}</p>
                    <input
                      type="date"
                      className="form-control"
                      id="ngaydi"
                      name="ngaydi"
                      placeholder="Điền ngày đi ..."
                      onChange={(e) => {
                        const dayGo = e.target.value;

                        setDayGo(dayGo);
                      }}
                    />
                  </div>
                </div>

                {/* thông tin dịch vụ */}
                <div className="line-page mt-5"></div>
                <h5 className="my-3">Thông tin dịch vụ </h5>
                <div className="line-page "></div>

                <div className="form-group row mt-3">
                  <div className="col-sm-5">
                    <label htmlFor="inputLastname">Tên dịch vụ :</label>
                    <select
                      id="cars"
                      className="form-control"
                      onChange={(e) => {
                        const selectDataService = e.target.value;
                        const arr = selectDataService.split(",");
                        setPriceService(arr[0]);
                        setIdService(arr[1]);
                      }}
                    >
                      {" "}
                      Tên khách hàng :<option>Dịch Vụ</option>
                      {serviceData.map((item) => (
                        <option key={item.id} value={[item.price, item.id]}>
                          {" "}
                          DV-
                          {item.id} {item.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-sm-4">
                    <label htmlFor="inputLastname">Giá dịch vụ:</label>
                    <input
                      disabled={true}
                      type="text"
                      className="form-control bg-white"
                      id="giadv"
                      placeholder="Điền giá dịch vụ ..."
                      onChange={(e) => {
                        setIdCustomer({
                          ...priceService,
                          price: e.target.value,
                        });
                      }}
                      value={priceService ? priceService : ""}
                    />
                  </div>

                  <div className="col-sm-3">
                    <label htmlFor="inputFirstname"> Số lượng</label>
                    <input
                      type="number"
                      className="form-control"
                      id="inputFirstname"
                      placeholder="Số lượng ..."
                      onChange={(e) => {
                        const amout = e.target.value;
                        const amoutNumber = Number(amout);
                        setAmountService(amoutNumber);
                      }}
                      value={amountService ? amountService : ""}
                    />
                  </div>

                  <div className="col-sm-12 mt-2 d-flex justify-content-end">
                    <button
                      type="button"
                      className="btn btn-primary px-4 float-left mt-4 pt-2"
                      onClick={handleSumService}
                    >
                      Tính tổng tiền
                    </button>
                  </div>
                </div>

                <h6 className="my-3 float-left">Thông tin tổng hóa đơn</h6>
                <br />
                <div className="line-page-bold mt-4 "></div>

                <div className="my-3 ">
                  <p className="float-left ">Tổng phí phòng :</p>
                  <p className="float-right">
                    {dataItem[2]} <span> VND</span>
                  </p>
                </div>

                <br />

                <div className="my-3">
                  <p className="float-left">Tổng phí dịch vụ :</p>
                  <p className="float-right">
                    {sumService} <span> VND</span>
                  </p>
                </div>
                <div className=" mt-5 line-page-bold"></div>

                <div className="my-3">
                  <h6 className="float-left">Tổng hóa đơn :</h6>
                  <h6 className="float-right">
                    {sumBill} <span> VND</span>
                  </h6>
                </div>
                <div className=" mt-5  line-page-bold"></div>
              </form>
            </div>
            {/* body */}

            {/* footer */}
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Đóng
              </button>
              <button
                onClick={handleOderBill}
                type="button"
                className="btn btn-primary"
              >
                Đặt phòng
              </button>
            </div>
            {/* footer */}
          </div>
        </div>
      </div>
      {/* modal */}
    </>
  );
}

export default OderRoomForm;
