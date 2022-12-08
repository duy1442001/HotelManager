import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function ChangePassword() {
  /////////////////
  const [error, setError] = useState("");
  const history = useNavigate();
  const token = JSON.parse(localStorage.getItem("token"));
  const [details, setDetails] = useState({
    old_password: "",
    new_password: "",
    new_password_confirmation: "",
  });

  const handleChangePassword = (e) => {
    e.preventDefault();
    changePassword(details);
  };
  //call api
  async function changePassword(detail) {
    try {
      let res = await axios.post("http://localhost:8000/changepass", detail, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      res = await res;
      alert("Thay đổi mật khẩu thành công !");
      localStorage.clear("token");
      history("/login");
      
    
    } catch (error) {
        setError(JSON.parse(error.response.data));
    }
  }

  ////////////////

  return (
    <div>
      <div className="col-md-6 offset-md-3">
        <span className="anchor" id="formChangePassword"></span>

        {/* <!-- form card change password --> */}
        <div className="card card-outline-secondary">
          <div className="card-header">
            <h3 className="mb-0 font-weight-bold">Change Password</h3>
          </div>
          <div className="card-body">
            <form
              className="form"
              role="form"
            //   autoComplete="off"
              onSubmit={handleChangePassword}
            >
              <div className="form-group mt-4">
                <label htmlFor="inputPasswordOld">Mật khẩu cũ</label>
                <div className="text-danger">
                  {error.old_password}
                </div>
                <input
                  type="password"
                  className="form-control"
                  id="old_password"
                  required=""
                  name="old_password"
                  placeholder="Điền mật khẩu cũ ..."
                  onChange={(e) => {
                    setDetails({
                      ...details,
                      old_password: e.target.value,
                    });
                  }}
                  value={details.old_password ? details.old_password : ""}
                />
              </div>
              <div className="form-group">
                <label htmlFor="inputPasswordNew">Mật khẩu mới</label>
                <div className="text-danger">{error.new_password}</div>
                <input
                  type="password"
                  className="form-control"
                  id="new_password"
                  required=""
                  placeholder="Điền mật khẩu mới ..."
                  name="new_password"
                  onChange={(e) => {
                    setDetails({
                      ...details,
                      new_password: e.target.value,
                    });
                  }}
                  value={details.new_password ? details.new_password : ""}
                />
                
              </div>
              <div className="form-group">
                <label htmlFor="inputPasswordNewVerify">Xác nhận</label>
                <div className="text-danger">
                  {error.new_password_confirmation}
                </div>
                <input
                  type="password"
                  className="form-control"
                  id="new_password_confirmation"
                  placeholder="Xác nhận mật khẩu mới ..."
                  required=""
                  name="new_password_confirmation"
                  onChange={(e) => {
                    setDetails({
                      ...details,
                      new_password_confirmation: e.target.value,
                    });
                  }}
                  value={
                    details.new_password_confirmation
                      ? details.new_password_confirmation
                      : ""
                  }
                />
                
              </div>
              <div className="form-group">
                <button
                  type="submit"
                  className="btn btn-success btn-lg float-right bg-primary  "
                >
                  Lưu
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* <!-- /form card change password --> */}
      </div>
    </div>
  );
}

export default ChangePassword;
