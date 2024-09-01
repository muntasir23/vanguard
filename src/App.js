import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Hightlights from "./components/highliights/Hightlights";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import AddProduct from "./pages.js/AddProduct";
import AllProduct from "./components/AllProduct";
import CostSection from "./pages/CostSection";
import Invoice from "./pages/Invoice";
import CustomerDetails from "./pages/CustomerDetails";
import CreateInvoice from "./components/invoices/CreateInvoice";

function App() {
  const [sidebar, setSidebar] = useState(true);

  const sidebarOpen = () => {
    setSidebar(!sidebar);
  };

  const sidebarClose = () => {
    setSidebar(true);
  };

  return (
    <BrowserRouter>
      <Navbar sidebarOpen={sidebarOpen} />
      <div className="w-[100%] grid place-items-center">
        <div className="appgrid w-[100%] ">
          <Sidebar sidebar={sidebar} sidebarClose={sidebarClose} />
          <Routes>
            <Route path="/addproduct" element={<AddProduct />}></Route>
            <Route path="/" element={<Hightlights />}></Route>
            <Route path="/allproducts" element={<AllProduct />}></Route>
            <Route path="/allcost" element={<CostSection />}></Route>
            <Route path="/invoice" element={<Invoice />}></Route>
            <Route path="/createinvoice" element={<CreateInvoice />}></Route>
            <Route
              path="/customersdetails"
              element={<CustomerDetails />}
            ></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
