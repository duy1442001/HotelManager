import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Footer from "../layouts/Footer";
import Sidebar from "../layouts/Sidebar";
import Topbar from "../layouts/Topbar";
import { AppProvider } from "../Context/AppContext";
import Router from "../routes/Router";

function Local() {

  
  let history = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      history("/login");
    }
  });

  return (
    <>
      <div id="wrapper">
      <AppProvider>
        {/* <!-- Sidebar --> */}
        <Sidebar />
        {/* <!-- End of Sidebar --> */}

        {/* <!-- Content Wrapper --> */}
        <div id="content-wrapper" className="d-flex flex-column">
          {/* <!-- Main Content --> */}
          <div id="content">
            {/* <!-- Topbar --> */}
            <Topbar />
            {/* <!-- End of Topbar --> */}

            {/* <!-- Begin Page Content --> */}

            {/* <Content/> */}
           
              <Router />
           

            {/* <Content/> */}

            {/* <!-- /.container-fluid --> */}
          </div>
          {/* <!-- End of Main Content --> */}

          {/* <!-- Footer --> */}
          <Footer />
          {/* <!-- End of Footer --> */}
        </div>
        {/* <!-- End of Content Wrapper --> */}
        </AppProvider>
      </div>
    </>
  );
}

export default Local;
