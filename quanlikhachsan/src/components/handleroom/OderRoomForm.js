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
    alert("?????t ph??ng th??nh c??ng !");
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
                Th??ng tin ?????t ph??ng
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
                {/* th??ng tin kh??ch h??ng */}
                <h5 className="my-3">Th??ng tin kh??ch h??ng </h5>
                <div className="line-page "></div>

                <div className="form-group row mt-3">
                  <div className="col-sm-6">
                    <label htmlFor="inputLastname">M?? kh??ch h??ng :</label>
                    <input
                      disabled={true}
                      type="text"
                      className="form-control bg-white"
                      id="maKH"
                      name='maKH'
                      placeholder="??i???n m?? kh??ch h??ng ..."
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
                    <label htmlFor="inputLastname">T??n kh??ch h??ng :</label>

                    <select
                      id="cars"
                      className="form-control"
                      onChange={(e) => {
                        const selectIdCustomer = e.target.value;
                        setIdCustomer(selectIdCustomer);
                      }}
                    >
                      {" "}
                      T??n kh??ch h??ng :<option>Kh??ch h??ng</option>
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
                {/* th??ng tin kh??ch h??ng */}

                {/* th??ng tin ph??ng */}
                <div className="line-page mt-5 "></div>

                <h5 className="my-3">Th??ng tin ph??ng </h5>
                <div className="line-page "></div>

                <div className="form-group row mt-3">
                  <div className="col-sm-6">
                    <label htmlFor="inputLastname">T??n ph??ng :</label>
                    <input
                      disabled={true}
                      type="text"
                      className="form-control bg-white"
                      id="tenPhong"
                      name="ten"
                      placeholder="??i???n t??n ph??ng ..."
                      defaultValue={dataItem[1]}
                    />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="inputLastname">Gi?? Ph??ng :</label>
                    <input
                      disabled={true}
                      type="text"
                      className="form-control bg-white"
                      id="giaphong"
                      name="gia"
                      placeholder="??i???n gi?? ph??ng ..."
                      defaultValue={dataItem[2]}
                    />
                  </div>
                </div>

                <div className="form-group row mt-3">
                  <div className="col-sm-6">
                    <label htmlFor="inputLastname">Ng??y ?????n :</label>
                    <p className="text-danger">{errorDayIn}</p>

                    <input
                      type="date"
                      className="form-control"
                      id="ngayden"
                      name="ngayden"
                      placeholder="??i???n ng??y ?????n ..."
                      onChange={(e) => {
                        const dayCome = e.target.value;

                        setDayCome(dayCome);
                      }}
                    />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="inputLastname">Ng??y ??i :</label>
                    <p className="text-danger">{errorDayOut}</p>
                    <input
                      type="date"
                      className="form-control"
                      id="ngaydi"
                      name="ngaydi"
                      placeholder="??i???n ng??y ??i ..."
                      onChange={(e) => {
                        const dayGo = e.target.value;

                        setDayGo(dayGo);
                      }}
                    />
                  </div>
                </div>

                {/* th??ng tin d???ch v??? */}
                <div className="line-page mt-5"></div>
                <h5 className="my-3">Th??ng tin d???ch v??? </h5>
                <div className="line-page "></div>

                <div className="form-group row mt-3">
                  <div className="col-sm-5">
                    <label htmlFor="inputLastname">T??n d???ch v??? :</label>
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
                      T??n kh??ch h??ng :<option>D???ch V???</option>
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
                    <label htmlFor="inputLastname">Gi?? d???ch v???:</label>
                    <input
                      disabled={true}
                      type="text"
                      className="form-control bg-white"
                      id="giadv"
                      placeholder="??i???n gi?? d???ch v??? ..."
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
                    <label htmlFor="inputFirstname"> S??? l?????ng</label>
                    <input
                      type="number"
                      className="form-control"
                      id="inputFirstname"
                      placeholder="S??? l?????ng ..."
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
                      T??nh t???ng ti???n
                    </button>
                  </div>
                </div>

                <h6 className="my-3 float-left">Th??ng tin t???ng h??a ????n</h6>
                <br />
                <div className="line-page-bold mt-4 "></div>

                <div className="my-3 ">
                  <p className="float-left ">T???ng ph?? ph??ng :</p>
                  <p className="float-right">
                    {dataItem[2]} <span> VND</span>
                  </p>
                </div>

                <br />

                <div className="my-3">
                  <p className="float-left">T???ng ph?? d???ch v??? :</p>
                  <p className="float-right">
                    {sumService} <span> VND</span>
                  </p>
                </div>
                <div className=" mt-5 line-page-bold"></div>

                <div className="my-3">
                  <h6 className="float-left">T???ng h??a ????n :</h6>
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
                ????ng
              </button>
              <button
                onClick={handleOderBill}
                type="button"
                className="btn btn-primary"
              >
                ?????t ph??ng
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
