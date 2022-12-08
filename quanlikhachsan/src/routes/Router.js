import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Room from "../pages/Room";
import Bill from "../pages/Bill";
import User from "../pages/User";
import Oder from "../pages/services/Oder";
import Customer from "../pages/Customer";
import Content from "../layouts/Content";
import Service from "../pages/services/Service";
import ShowProfile from "../components/profile/ShowProfile";
import ChangePassword from "../components/profile/ChangePassword";
import { AppContext } from "../Context/AppContext";
import { useContext } from "react";

function Router() {
  const { role } = useContext(AppContext);
  const roleAccount = role;
  const roleAdmin = (roleAccount)=>{
    if(roleAccount===1){
      return <Route path="/user/*" element={<User />} /> 
    }
  }
  
  return (
    <Routes>
      <Route path="*" element={<Content />} />
      <Route path="/profile" element={<ShowProfile />} />
      <Route path="/change_password" element={<ChangePassword />} />
      <Route path="/room/*" element={<Room />} />
      <Route path="/oder/*" element={<Oder />} />
      <Route path="/customer/*" element={<Customer />} />
      <Route path="/service/*" element={<Service />} />
      <Route path="/bill/*" element={<Bill />} />
      {roleAdmin(roleAccount)}
    </Routes>
  );
}

export default Router;
