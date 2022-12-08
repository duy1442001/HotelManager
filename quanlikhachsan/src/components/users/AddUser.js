import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function AddUser() {
  /////////////////
  const token = JSON.parse(localStorage.getItem("token"));

  const [details, setDetails] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    group_id: "",
  });
  const [error, setError] = useState("");

  const history = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    register(details);
  };
  //call api
  async function register(detail) {

    try {
      let res = await axios.post("http://localhost:8000/register", detail, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      res = await res;
      window.location="/user";
      alert("Thêm người dùng thành công !");
     
    } catch (error) {
      setError(JSON.parse(error.response.data));
    }
  }
  ////////////////

  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3  d-flex justify-content-between">
        <h6 className="mt-2 font-weight-bold text-primary">Thêm tài khoản</h6>
        <div className="">
          <Link type="button" to="/user" className="btn btn-primary fw-bold">
            <i className="bi bi-arrow-return-right"></i> Trở lại
          </Link>
        </div>
      </div>

      <div className="card-body">
        <div className="table-responsive">
          <form className="ml-1" onSubmit={handleRegister}>
            <div className="form-group">
              <label htmlFor="name">Tên tài khoản</label>
              <div className="text-danger">{error.name}</div>

              <input
                type="text "
                className="form-control"
                id="name"
                name="name"
                placeholder="Tên tài khoản ..."
                onChange={(e) => {
                  setDetails({
                    ...details,
                    name: e.target.value,
                  });
                }}
                value={details.name}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <div className="text-danger">{error.email}</div>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="nhập email"
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
              <label htmlFor="exampleInputPassword1">Mật khẩu</label>
              <div className="text-danger">{error.password}</div>
              <input
                type="password"
                className="form-control"
                id="password"
                autoComplete="on"
                name="password"
                placeholder="Password"
                onChange={(e) => {
                  setDetails({
                    ...details,
                    password: e.target.value,
                  });
                }}
                value={details.password}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Xác nhận mật khẩu</label>
              <input
                type="password"
                className="form-control"
                id="password_confirmation"
                autoComplete="on"
                name="password_confirmation"
                placeholder="Password"
                onChange={(e) => {
                  setDetails({
                    ...details,
                    password_confirmation: e.target.value,
                  });
                }}
                value={details.password_confirmation}
              />
            </div>

            <label htmlFor="Status">Vai trò</label>
            <div className="text-danger">{error.group_id}</div>

            <div className="form-group form-check ml-1">
              <input
                type="radio"
                name="1"
                className="form-check-input"
                id="Check1"
                onChange={(e) => {
                  setDetails({
                    ...details,
                    group_id: e.target.value,
                  });
                }}
                value="1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                admin
              </label>
            </div>

            <div className="form-group form-check ml-1">
              <input
                type="radio"
                name="1"
                className="form-check-input"
                id="Check2"
                onChange={(e) => {
                  setDetails({
                    ...details,
                    group_id: e.target.value,
                  });
                }}
                value="2"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                user
              </label>
            </div>

            <div className="form-group form-check ml-1">
              <input
                type="radio"
                name="1"
                className="form-check-input"
                id="Check3"
                onChange={(e) => {
                  setDetails({
                    ...details,
                    group_id: e.target.value,
                  });
                }}
                value="3"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                manager
              </label>
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

export default AddUser;
