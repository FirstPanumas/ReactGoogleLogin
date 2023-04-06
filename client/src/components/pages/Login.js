import React from "react";
import { Container, Button } from "react-bootstrap";
import { auth, googleAuthProvider } from "../firebase";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../../store/userSlice";
export const Login = () => {
  const { user } = useSelector((state) => ({ ...state }));
  const dispach = useDispatch();
  console.log(user.value);

  const handdleLoginGoogle = async () => {
    console.log("123");
    auth
      .signInWithPopup(googleAuthProvider)
      .then(async (result) => {
        console.log("result", result);
        const { user } = result;
        const idToken = await user.getIdTokenResult();
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  return (
    <Container>
      <h1>{user.value}</h1>
      <Button onClick={handdleLoginGoogle}>Sign Google</Button>
      <hr />
      <Button onClick={() => dispach(login())}>TEST Login</Button>
      <Button onClick={() => dispach(logout())}>TEST Logout</Button>
    </Container>
  );
};
