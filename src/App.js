import { useState } from "react";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Menu from "./Pages/Menu";
import Contact from "./Pages/Contact";
import ScrollTop from "./Components/ScrollTop/ScrollTop";
import Admin from "./Pages/Admin/Admin";
import { Route, Routes } from "react-router-dom";
import Checkout from "./Pages/Checkout";
import Dashboard from "./Pages/Admin/Dashboard";

function App() {
  const [alert, setAlert] = useState(null);
  // Show Alert Function
  const showAlert = (messsag, type, icon) => {
    setAlert({
      msg: messsag,
      type: type,
      icon: icon,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <div className="App">
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Home alert={alert} showAlert={showAlert} />} exact />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact alert={alert} showAlert={showAlert} />} />
        <Route path="/checkout" element={<Checkout alert={alert} showAlert={showAlert} />} />
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/admin/dashboard/*" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
