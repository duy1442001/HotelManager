import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import FormVertifi from "../components/login/FormVertifi";

function Login() {
  const history = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      window.location="/";
    }
  });

  const [details, setDetails] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [errorPass, setErrorPass] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [getToken, setGetToken] = useState();

  const handleLogin = (e) => {
    e.preventDefault();
    // console.log(details)
    Login(details);
  };
  //call api
  async function Login(detail) {
    try {
      let res = await axios.post("http://localhost:8000/login", detail, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer`,
        },
      });
      res = await res.data;
      console.log(res)
      let token = res.access_token;
      setGetToken(JSON.stringify(token))

      
      // localStorage.setItem("token", JSON.stringify(token));
      // window.location="/";
      
    } catch (error) {
      setErrorPass(error.response.data.password);
      setErrorEmail(error.response.data.email);
      setError(error.response.data.error);
    }
  }

  return (
<>
    {!getToken?(
    <div className="bg-gradient-primary vh-100 vw-100 overflow-hidden">
      <div className="container vh-100 vw-100">
        {/* <!-- Outer Row --> */}
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                {/* <!-- Nested Row within Card Body --> */}
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                  <div className="col-lg-6">
                    <div className="p-5 ">
                      <div className="text-center">
                        <div className="mt-5 pt-5"></div>
                        <h1 className="h4 text-gray-1000 mb-4  font-weight-bold">Welcome Back!</h1>
                        <p className="text-danger">
                          {error}
                          {errorEmail}
                          <br />
                          {errorPass}
                        </p>
                      </div>
                      <form className="user" onSubmit={handleLogin}>
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control form-control-user"
                            id="exampleInputEmail"
                            aria-describedby="emailHelp"
                            placeholder="Enter Email Address..."
                            name="email"
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
                          <input
                            type="password"
                            className="form-control form-control-user"
                            id="exampleInputPassword"
                            placeholder="Password"
                            autoComplete="on"
                            onChange={(e) =>
                              setDetails({
                                ...details,
                                password: e.target.value,
                              })
                            }
                            value={details.password}
                          />
                        </div>
                        <div className="form-group">
                          <div className="custom-control custom-checkbox small"></div>
                        </div>
                        <button
                          type="submit"
                          className="btn btn-primary btn-user btn-block"
                        >
                          Đăng nhập
                        </button>
                        <div className="mb-5 pb-5"></div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ):(<FormVertifi token={getToken}/>)} 
    </>
  );
}

export default Login;
