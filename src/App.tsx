import { useContext, useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import SignInSide from "./pages/SignInSide";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import NoMatch from "./pages/404";
// import {AuthContext} from "./hooks/AuthContext"
import { AuthProvider } from "./components/AuthProvider";
import "./App.css";
import { useAuth } from "./hooks/AuthContext";

function App() {
  // const navigate = useNavigate();
  const { user } = useAuth();
  console.log(typeof user)

  // useEffect(() => {
  //   if (user) {
  //     navigate("/");
  //   } else {
  //     navigate("/login");
  //   }
  // }, [navigate, user]);

  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home user={user} />}></Route>
        <Route path="/login" element={<SignInSide />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="*" element={<NoMatch />}></Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
