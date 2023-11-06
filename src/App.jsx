import { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

import Footer from "./components/Footer";
import Home from "./pages/HomeC.js";
import Login from "./pages/Login.js";
import Signup from "./pages/Signup.js";
import Nav from "./components/Nav";
import "./App.css";

//import Loging from "./pages/Login";

export const UserContext = createContext();

function App() {
  const [userState, setUserState] = useState({});
  const user = {
    userName: "joedoe@gmail.com",
    accountType: "admin",
    _id: "12345678",
  };
  console.log("userState in app ->");
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ userState, setUserState }}>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
