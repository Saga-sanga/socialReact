import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignInSide from "./pages/SignInSide";
import SignUp from "./pages/Signup";
import NoMatch from "./pages/404";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignInSide/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="*" element={<NoMatch/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
