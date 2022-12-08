import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function AddCustomer() {
  /////////////////
  const [details, setDetails] = useState({
    firtname: "",
    lastname: "",
    email: "",
    phone: "",
    CCCD: "",
    created_at: "",
    update_at: "",
  });
  const [error, setError] = useState("");
  const token = JSON.parse(localStorage.getItem("token"));

  const history = useNavigate();
  const handleAddCustomer = (e) => {
    e.preventDefault();
    console.log(details)
    addCustomer(details);
  };
  //call api
  async function addCustomer(detail) {
    // try {
      let res = await axios.post(
        "http://localhost:8000/client/create",
        detail,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      res = await res;
      // alert("Thêm khách hàng thành công !");
      // window.location="/service";
      
    // } catch (error) {
    //   setError(JSON.parse(error.response.data));
    // }
 
  }
  ////////////////

  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3  d-flex justify-content-between">
        <h6 className="mt-2 font-weight-bold text-primary">
          Thêm Thông Tin Khách Hàng
        </h6>
        <div className="">
          <a type="button" href="/customer" className="btn btn-primary fw-bold">
            <i className="bi bi-arrow-return-right"></i> Trở lại
          </a>
        </div>
      </div>

      <div className="card-body">
        <div className="table-responsive">
          <form className="ml-1" onSubmit={handleAddCustomer}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Họ và tên lót </label>
              <p className="text-danger">{error.firtname}</p>
              <input
                type="text "
                className="form-control"
                id="fistName"
                placeholder="Điền họ và tên lót ... "
                onChange={(e) => {
                  setDetails({
                    ...details,
                    firtname: e.target.value,
                  });
                }}
                value={details.firtname}
              />
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Tên</label>
              <p className="text-danger">{error.lastname}</p>
              <input
                type="text "
                className="form-control"
                id="lastName"
                placeholder="Điền tên ... "
                onChange={(e) => {
                  setDetails({
                    ...details,
                    lastname: e.target.value,
                  });
                }}
                value={details.lastname}
              />
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email</label>
              <p className="text-danger">{error.email}</p>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Điền email ..."
                onChange={(e) => {
                  setDetails({
                    ...details,
                    email: e.target.value,
                  });
                }}
                value={details.email}
              />
            </div>

            <div className="form-group">
              <label htmlFor="telephone number">Số điện thoại</label>
              <p className="text-danger">{error.phone}</p>
              <input
                type="tel"
                className="form-control"
                id="so dien thoai"
                placeholder="Điền số điện thoại ..."
                onChange={(e) => {
                  setDetails({
                    ...details,
                    phone: e.target.value,
                  });
                }}
                value={details.phone}
              />
            </div>

            <div className="form-group">
              <label htmlFor="telephone number">Căn cước công dân</label>
              <p className="text-danger">{error.CCCD}</p>
              <input
                type="tel"
                className="form-control"
                id="so dien thoai"
                placeholder="Điền căn cước công dân ..."
                onChange={(e) => {
                  setDetails({
                    ...details,
                    CCCD: e.target.value,
                  });
                }}
                value={details.CCCD}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Lưu
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddCustomer;
