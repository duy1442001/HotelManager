import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function AddService() {


 /////////////////
 const [details, setDetails] = useState({
  name: "",
  price: "",
  description: "",
});
const [error, setError] = useState("");
const token = JSON.parse(localStorage.getItem("token"));


const history = useNavigate();

const handleAddService = (e) => {
  e.preventDefault();

  addService(details);
};
//call api
async function addService(detail) {
  try {
    let res = await axios.post("http://localhost:8000/service/add", detail, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    res = await res;
    window.location="/service";
    alert("Thêm dịch vụ thành công !");
  } catch (error) {
    setError(JSON.parse(error.response.data));
  }

}
////////////////





    return (
        <div className="card shadow mb-4">
          <div className="card-header py-3  d-flex justify-content-between">
            <h6 className="mt-2 font-weight-bold text-primary">Thêm dịch vụ</h6>
            <div className="">
              <Link type="button" to="/service" className="btn btn-primary fw-bold">
              <i className="bi bi-arrow-return-right"></i> Trở lại
              </Link>
            </div>
          </div>
    
          
    
          <div className="card-body">
            <div className="table-responsive">
              <form className="ml-1" onSubmit={handleAddService}>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Tên dịch vụ</label>
            <div className="text-danger">{error.name}</div>

                  <input
                    type="text "
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Điền tên dịch vụ ... "

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
                  <label htmlFor="price-service">Giá dịch vụ</label>
            <div className="text-danger">{error.price}</div>

                  <input
                    type="number"
                    className="form-control"
                    id="price"
                    name="price"
                    placeholder="Điền giá dịch vụ"
                    onChange={(e) => {
                      setDetails({
                        ...details,
                        price: e.target.value,
                      });
                    }}
                    value={details.price}
                  />
                </div>
               
               

           


                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Mô tả dịch vụ</label>
            <div className="text-danger">{error.description}</div>

                  <input
                    type="text "
                    className="form-control"
                    id="decription"
                    name="decription"
                    placeholder="Điền mô tả ... "

                    onChange={(e) => {
                      setDetails({
                        ...details,
                        description: e.target.value,
                      });
                    }}
                    value={details.description}

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

export default AddService