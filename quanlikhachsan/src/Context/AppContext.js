import { Children, createContext, useEffect, useState } from "react";
import axios from "axios";

export const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const token = JSON.parse(localStorage.getItem("token"));

  //customer
  const [customerData, setCustomerData] = useState([]);

  //user
  const [userData, setUserData] = useState([]);

  //service
  const [serviceData, setServiceData] = useState([]);

  //room
  const [dataAllRoom, setDataAllRoom] = useState([]);
  const [dataFreeRoom, setDataFreeRoom] = useState([]);
  const [dataBookedRoom, setDataBookedRoom] = useState([]);
  const [dataCleanRoom, setDataCleanRoom] = useState([]);
  const [dataCheckInRoom, setDataCheckInRoom] = useState([]);

  const [role, setRole] = useState();

  //count room

  // const [dataCountAllRoom, setDataCountAllRoom] = useState([]);
  // const [dataCountFreeRoom, setDataCountFreeRoom] = useState([]);
  // const [dataCountBookedRoom, setDataCountBookedRoom] = useState([]);
  // const [dataCountCleanRoom, setDataCountCleanRoom] = useState([]);

  //get infor
  const getProFile = async () => {
    let res = await axios.get("http://localhost:8000/view-account", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    res = await res.data;
    setRole(res.group_id);
  };

  //get data room

  // all room
  const getDataAllRoom = async () => {
    let res = await axios.get("http://localhost:8000/room/getlist", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    res = await res.data.data;
    setDataAllRoom(res);
    
  };

  // const getDataAllRoom = useAsync (async () => {
  //   let res = await axios.get("http://localhost:8000/room/getlist", {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${token}`,
  //     },
  //   });
  //   return {
  //     dataAllRoom: res.data.data,
  //     dataCount:res.data.total
  //   };
  // }, [token]);
  // const { loading, value } = getDataAllRoom;

  // const loadingOfAllRoom = loading
  // const countOfAllRoom = value?.dataCount??0
  // const dataOfAllRoom = value?.dataAllRoom??[];

  // free room
  const getDataFreeRoom = async () => {
    //await here
    let res = await axios.get(
      "http://localhost:8000/room/filter?status_room=1",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    res =  res.data.Rom;

    setDataFreeRoom(res);
  };

  //booked room
  const getDataBookedRoom = async () => {
    let res = await axios.get(
      "http://localhost:8000/room/filter?status_room=4",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // let countDataBookedRoom = res.data.client.length
    res =  res.data.Rom;
    
   

    setDataBookedRoom(res);
  };
  //booked room
  const getDataCheckInRoom = async () => {
    let res = await axios.get(
      "http://localhost:8000/room/filter?status_room=2",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(res)
    res =  res.data.Rom;
    setDataCheckInRoom(res);
  };


  //clean room
  const getDataCleanRoom = async () => {
    //await here
    let res = await axios.get(
      "http://localhost:8000/room/filter?status_room=3",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
  
    res =  res.data.Rom;
    setDataCleanRoom(res);

  };

  // end get data room

  // get data customer
  const getDataCustomer = async () => {
    let res = await axios.get("http://localhost:8000/client/client-profile", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    res =  res.data.data;
    setCustomerData(res);
  };

  // get data user
  const getDataUser = async () => {
    let res = await axios.get("http://localhost:8000/all-account", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    res =  res.data.data;
    setUserData(res);
  };

  // get data service
  const getDataService = async () => {
    let res = await axios.get("http://localhost:8000/service/service-info", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    res =  res.data.data;
    setServiceData(res);
  };
  ///

  useEffect(() => {
    getDataUser();
    getDataCustomer();
    getDataService();
    getDataAllRoom();
    getDataFreeRoom();
    getDataBookedRoom();
    getDataCleanRoom();
    getDataCheckInRoom();

    getProFile()
  }, [token]);

  return (
    <AppContext.Provider
      value={{
        customerData,
        userData,
        serviceData,
        dataAllRoom,
        dataFreeRoom,
        dataBookedRoom,
        dataCleanRoom,
        dataCheckInRoom,

        role
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
