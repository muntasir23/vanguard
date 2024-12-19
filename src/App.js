import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Hightlights from "./components/highliights/Hightlights";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import Invoice from "./pages/Invoice";
import CustomerDetails from "./pages/CustomerDetails";
import CreateInvoice from "./components/invoices/CreateInvoice";
import CostPage from "./pages/CostPage";
import HomePage from "./pages/HomePage";
import OrderPage from "./pages/OrderPage";
import InvoicePreview from "./components/odersection/InvoicePreview";
import ProductPage from "./pages/ProductPage";

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
      <div className="w-[100%] h-full grid place-items-center bg-white">
        <div className="appgrid w-[100%] ">
          <Sidebar sidebar={sidebar} sidebarClose={sidebarClose} />
          <Routes>
            <Route path="/hi" element={<Hightlights />}></Route>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/invoice" element={<Invoice />}></Route>
            <Route path="/createinvoice" element={<CreateInvoice />}></Route>
            <Route path="/costdetails" element={<CostPage />}></Route>
            <Route
              path="/customersdetails"
              element={<CustomerDetails />}
            ></Route>
            <Route path="/oderpage" element={<OrderPage />}></Route>
            <Route path="/invoicepreview" element={<InvoicePreview />}></Route>
            <Route path="/productpage" element={<ProductPage />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
