import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Hightlights from "./components/highliights/Hightlights";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

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
          <Hightlights />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
