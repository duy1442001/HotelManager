import React from "react";
import { Route, Routes } from "react-router-dom";
import AddService from "../../components/service/AddService";
import ShowService from "../../components/service/ShowService";
import UpdateService from "../../components/service/UpdateService";
function Service() {
  return (
    // <!-- Begin Page Content -->
    <div className="container-fluid">
      {/* 
        <!-- Page Heading --> */}
      <div className="d-flex justify-content-between ">

        <h1 className="h3 mb-2 text-gray-800">Dịch Vụ</h1>

        {/* <!-- Topbar Search --> */}
        <div>
        <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search ">
          <div className="input-group">
            <input
              type="text"
              className="form-control border-0 small"
              placeholder="Tìm kiếm ......"
              aria-label="Search"
              aria-describedby="basic-addon2"
            />
            <div className="input-group-append">
              <button className="btn btn-primary" type="button">
                <i className="fas fa-search fa-sm"></i>
              </button>
            </div>
          </div>
        </form>
        </div>

      </div>

      <p className="mb-4"></p>

      {/* <!-- DataTales Example --> */}
      {/* <ShowUser/> */}

      <Routes>
        <Route path="" element={<ShowService />} />
        <Route path="add" element={<AddService />} />
        <Route path="update/:id" element={<UpdateService />} />
      </Routes>
    </div>
    // <!-- /.container-fluid -->
  );
}

export default Service;
