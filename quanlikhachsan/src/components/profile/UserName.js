import jwtDecode from "jwt-decode";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function userName() {
  if (localStorage.getItem("token")) {
    const token = localStorage.getItem("token");
    const decoded = jwtDecode(token);
    let username = decoded[0];
    return username;
  }
  return "";
}

function UserName() {

  return (
    <span className="mr-2 d-none d-lg-inline text-gray-600 small">
      {/* {username?username.toUpperCase():""} */}
      {userName().toUpperCase()}
    </span>
  );
}

export default UserName;
