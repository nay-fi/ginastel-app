import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Home from "./pages/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
// import { useState } from "react";
import { AuthContext } from "./AuthContext";
import RequireAuth from "./components/RequireAuth";
import useLocalStorage from "use-local-storage";
import Profile from "./pages/Profile";
import Makanan from "./pages/Makanan";
import DetailMakanan from "./pages/DetailMakanan";

export default function App() {
  const [token, setToken] = useLocalStorage("token", null);
  const [data, setData] = useState(null);
  const [isLoaded, setisLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("One Piece");

  const [modalShow, setModalShow] = useState(false);
  const [modalItem, setModalItem] = useState(null);


const handleClick = (item) => {
    setModalShow(!modalShow);
    setModalItem(item);
}

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Login />} path="/login" />
          <Route
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
            path="/dashboard"
          />
          <Route
            element={
              <RequireAuth>
                <Makanan />
              </RequireAuth>
            }
            path="/makanan"
          />
          <Route
            element={
              <RequireAuth>
                <DetailMakanan />
              </RequireAuth>
            }
            path="/detail/:id"
          />
          <Route
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
            path="/profile"
          />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}