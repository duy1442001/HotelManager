import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function FormVertifi({ token }) {
  const  history= useNavigate();
  const [error, setError] = useState("");
  const [detailCode, setDetailCode] = useState({ code: "" });
  const tokenRe = JSON.parse(token);

  


  useEffect(()=>{
    setTimeout(() => {
      alert("Code hết thời gian hiệu lực !")
      window.location.reload();
    }, 1000*60*5);
  
  },[])

  async function checkCode(detail) {
    try {
  
    let res = await axios.post("http://localhost:8000/code",detail, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${tokenRe}`,
      },
    });
    
    res = await res.data.data
   
    if(res == 0){
      const codeFalse = "Code không đúng !"
      setError(codeFalse)  
    }else if(res==1){
      localStorage.setItem("token", token);
      window.location="/";
      alert("Đăng nhập thành công !")
    }
   
    
    } catch (error) {
   
      setError(error.response.data.code);
    }
  }

  const resetCode = async () => {
    let res = await axios.get("http://localhost:8000/2fa/reset", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${tokenRe}`,
      },
    });
    setTimeout();
    alert('Gửi lại mã thành công !')
  };

  const handleresetCode = (e) => {
    e.preventDefault();
    history("/login")
    resetCode();
  };

  const handleCheckCode = (e) => {
    e.preventDefault();
    checkCode(detailCode);
  };

  return (
    <div className=" col-md-8 offset-md-2 mt-5">
      <div className="card card-outline-secondary">
        <div className="card-header">
          <h3 className="mb-0">Xác nhận đăng nhập</h3>
        </div>

        <div className="card-body">
          <form className="form" role="form" onSubmit={handleCheckCode} autoComplete="off">
            <div className="form-group">
              <div className="d-flex justify-content-center">
                <h6>Gửi đến email : ***@***</h6>
              </div>

              

              <div className="form-group mt-4 d-flex justify-content-between">
                
                <label htmlFor="code" className=" mr-5 col-sm">
                  Code
                </label>
                <input
                  type="number"
                  className="form-control mr-5 col-7"
                  id="code"
                  required=""
                  name="code"
                  onChange={(e) => {
                    setDetailCode({
                      ...detailCode,
                      code: e.target.value,
                    });
                  }}
                  defaultValue={detailCode?.code}
                />
               
              </div>
              <div className="d-flex justify-content-center">
                <h6 className="text-danger ml-5 col-5">{error}</h6>
              </div>
              <a
                onClick={handleresetCode} type="button"
                className="hove form-group d-flex justify-content-center col-10 ml-1 mr-5  cursor-pointer"
              >
                Gửi lại mã ?
              </a>
            </div>
            <div className="form-group d-flex justify-content-center col-10 ">
              <button
                type="submit"
                
                className="btn btn-success btn-lg ml-5 mr-5"
              >
                Kiểm tra
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormVertifi;
