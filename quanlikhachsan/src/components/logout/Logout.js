import React from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'


function Logout() {
  const history = useNavigate();
  const logoutConfirm=()=>{   
    let text = "Đăng xuất !";
    if (window.confirm(text) == true) {
      text = "You pressed OK!";
      logout()
    } else {
      text = "You canceled!";

    }
   
  }
 const logout =()=>  {
   localStorage.clear("token")
   history("/") 
};

 
 return (

    <a className="dropdown-item" data-toggle="modal" data-target="#logoutModal" type="button" onClick={logoutConfirm}>
    <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
    Đăng xuất
   </a>
 )
}

export default Logout