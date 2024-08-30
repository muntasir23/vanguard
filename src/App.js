import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Hightlights from "./components/highliights/Hightlights";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import AddProduct from "./pages.js/AddProduct";
import AllProduct from "./components/AllProduct";

function App() {
  const [sidebar, setSidebar] = useState(true);

  const sidebarOpen = () => {
    setSidebar(!sidebar);
    console.log("Clicked");
  };

  return (
    <BrowserRouter>
      <Navbar sidebarOpen={sidebarOpen} />
      <div className="w-[100%] grid place-items-center">
        <div className="appgrid w-[100%] ">
          <Sidebar sidebar={sidebar} />
          <Routes>
            <Route path="/addproduct" element={<AddProduct />}></Route>
            <Route path="/" element={<Hightlights />}></Route>
            <Route path="/allproducts" element={<AllProduct />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
