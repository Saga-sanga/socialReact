import { useEffect, useState } from "react";
import {
  
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import SignInSide from "./pages/SignInSide";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import NoMatch from "./pages/404";
import "./App.css";

function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState();

  useEffect(() => {
    if (user) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [navigate, user]);

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<SignInSide setUser={setUser} />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="*" element={<NoMatch />}></Route>
    </Routes>
  );
}

export default App;
