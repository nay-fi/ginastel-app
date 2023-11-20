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

export default function App() {
  const [token, setToken] = useLocalStorage("token", null);
  const [data, setData] = useState(null);
  const [isLoaded, setisLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("One Piece");

  const [modalShow, setModalShow] = useState(false);
  const [modalItem, setModalItem] = useState(null);


//   useEffect(() => {
//     const fetchData = async (query) => {
//     setIsLoading(true);
//     try {
//         const response = await axios.get(
//             "https://the-cocktail-db.p.rapidapi.com/search.php",{
//             params: { q: query },
//             headers: {
//                 "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
//                 "x-rapidapi-key": "8bc19e9184msh7d8b41a7fa7b3acp1d0cdajsnb85c7739879c",
//             },
//             }
//         );
//         if (response.status === 200) {
//             setData(response.data);
//             setisLoaded(true);
//             setIsLoading(false);
//         }
//     } catch (err) {
//     console.log(err);
//     setIsLoading(false);
//     }
//     };
// if (!isLoaded) {
// fetchData(query);
// }
// }, [isLoaded, query]);
//     // const onSearch = (e) => {
//     // if (e.key === "Enter") {
//     // setisLoaded(false);
//     // setQuery(e.target.value);

// // };
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