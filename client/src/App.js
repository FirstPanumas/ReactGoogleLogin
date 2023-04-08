import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/layouts/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Login } from "./components/pages/Login";

// Checkuser
import { React, useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "./store/userSlice";
import { auth } from "./components/firebase";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const idToken = await user.getIdTokenResult();
        console.log("displayName", user.displayName);
        console.log("idToken", idToken.token);
        // dispatch to stage redux
        dispatch(
          login({
            email: user.email,
            token: idToken.token,
          })
        );
      }
    });

    return () => unsubscribe();
  }, []);
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
