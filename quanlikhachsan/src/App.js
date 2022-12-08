import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";

import Login from "./pages/Login";
import Protected from "./components/Protected";
import Local from "./pages/Local";
import { AppProvider } from "./Context/AppContext";



function App() {
  return (
    <BrowserRouter>
      <div className="App">
         {/* <AppProvider> */}
        <Routes>
          <Route path="*" element={<Protected Cmp={Local} />} />
          <Route path="/login" element={<Login />} />
        </Routes>
          {/* </AppProvider> */}
      </div>
    </BrowserRouter>
  );
}
export default App;
