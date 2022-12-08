import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function AddBill() {




  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  const getValue = (e) => {
  };




  /////////////////
 
  ////////////////





  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3  d-flex justify-content-between">
        <h6 className="mt-2 font-weight-bold text-primary">Thêm hóa đơn</h6>
        <div className="">
          <Link type="button" to="/bill" className="btn btn-primary fw-bold">
            <i className="bi bi-arrow-return-right"></i> Trở lại
          </Link>
        </div>
      </div>

      {/* <div className="card-body">
        <div className="table-responsive"> */}
      <div className="container-tabs">
        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            Phòng
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            Dịch vụ
          </button>
          <button
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          ></button>
        </div>

        {/* tab 1 */}

        <div className="content-tabs">
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
          >
            <h2>Chọn phòng</h2>
            <hr />

            <div className="container py-5">
              <div className="row">
                <div className="col-md-10 mx-auto">
                  <form>
                    <div className="form-group row">
                      <div className="col-sm-6">
                        <label htmlFor="inputLastname">Tên phòng :</label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputLastname"
                          placeholder="Last name"
                        />
                      </div>
                      <div className="col-sm-6">
                        <label htmlFor="inputLastname">Giá phòng :</label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputLastname"
                          placeholder="Last name"
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <div className="col-sm-6">
                        <label htmlFor="inputFirstname">Số lượng :</label>
                        <input
                          type="number"
                          className="form-control"
                          id="inputFirstname"
                          placeholder="First name"
                        />
                      </div>

                      <div className="col-sm-6">
                        <button
                          type="button"
                          className="btn btn-primary px-4 float-right mt-4"
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  </form>

                  <table
                    id="example"
                    className="table table-striped"
                    style={{ width: "100%" }}
                  >
                    <thead>
                      <tr>
                        <th>Tên phòng</th>
                        <th>Giá</th>
                        <th>Số lượng</th>
                        <th>Thành tiền</th>
                      </tr>
                    </thead>

                    <tbody>
                      {/*  */}
                      {/* {data.map((item) => ( */}
                      <tr>
                        <td>301</td>
                        <td>1000</td>
                        <td>2</td>
                        <td>2000</td>
                      </tr>

                      {/* ))} */}
                      <tr>
                        <td>301</td>
                        <td>1000</td>
                        <td>2</td>
                        <td>2000</td>
                      </tr>

                      {/* total  */}
                      <tr>
                        <td>Tổng tiền :</td>
                        <td></td>
                        <td></td>
                        <td>4000</td>
                      </tr>
                      {/*  */}

                      {/*  */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* tab 2 */}
          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
            <h2>Chọn dịch vụ </h2>
            <hr />

            <div className="container py-5">
              <div className="row">
                <div className="col-md-10 mx-auto">
                  <form>
                    <div className="form-group row">
                      <div className="col-sm-6">
                        <label htmlFor="exampleFormControlSelect1">
                          Tên dịch vụ :
                        </label>
                        <select
                          className="form-control"
                          id="exampleFormControlSelect1"
                          name="price-room"
                          onChange={getValue}
                        >
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                      </div>
                      <div className="col-sm-6">
                        <label htmlFor="inputLastname">Giá :</label>
                        <input
                          type="number"
                          className="form-control"
                          id="inputLastname"
                          placeholder="Last name"
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <div className="col-sm-6">
                        <label htmlFor="inputFirstname">Giá dịch vụ :</label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputFirstname"
                          placeholder="First name"
                        />
                      </div>
                      <div className="col-sm-6">
                        <button
                          type="button"
                          className="btn btn-primary px-4 float-right mt-4"
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  </form>

                  <table
                    id="example"
                    className="table table-striped"
                    style={{ width: "100%" }}
                  >
                    <thead>
                      <tr>
                        <th>Tên dịch vụ</th>
                        <th>Giá</th>
                        <th>Số lượng</th>
                        <th>Thành tiền</th>
                      </tr>
                    </thead>

                    <tbody>
                      {/*  */}
                      {/* {data.map((item) => ( */}
                      <tr>
                        <td>301</td>
                        <td>1000</td>
                        <td>2</td>
                        <td>2000</td>
                      </tr>
                      <tr>
                        <td>301</td>
                        <td>1000</td>
                        <td>2</td>
                        <td>2000</td>
                      </tr>
                      <tr>
                        <td>Tổng tiền :</td>
                        <td></td>
                        <td></td>
                        <td>4000</td>
                      </tr>

                      {/* ))} */}
                      {/*  */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* tab 3 */}

          <div
            className={
              toggleState === 3 ? "content  active-content" : "content"
            }
          >
            <h2>Content 3</h2>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
              nostrum rerum laudantium totam unde adipisci incidunt modi alias!
              Accusamus in quia odit aspernatur provident et ad vel distinctio
              recusandae totam quidem repudiandae omnis veritatis nostrum
              laboriosam architecto optio rem, dignissimos voluptatum beatae
              aperiam voluptatem atque. Beatae rerum dolores sunt.
            </p>
          </div>
        </div>
      </div>
    </div>
    //   </div>
    // </div>
  );
}
export default AddBill;
