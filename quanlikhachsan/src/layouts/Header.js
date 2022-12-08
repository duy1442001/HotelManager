import React,{ useEffect } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link ,useNavigate} from "react-router-dom";
import Logout from "../components/logout/Logout";
import jwtDecode from "jwt-decode";
import moment from "moment";


function Header() {
 

  return (

    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
            {
                 localStorage.getItem('token')&&
                 <Navbar.Brand href="/">Dashboard</Navbar.Brand>
            }
          <Nav className="me-auto navbar_warapper">
          {
                 localStorage.getItem('token')?
                 <>
                 <Link to="/staffs">Nhân Viên</Link>
                 <Link to="/rooms">Phòng</Link>
                 <Link to="/register">Đăng Ký</Link>
                 </>:
                 <Link to="/login">Đăng Nhập</Link>
            }
          </Nav>
          <Logout/>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
