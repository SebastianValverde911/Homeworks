import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../firebase/config";
import { useForm } from "../../hooks/useForm";
import { logout, login } from "../../store/slices/auth/AuthSlice";
import { loginAuth, loginWithGoogle } from "../../store/slices/auth/Thunks";
import { onAuthStateChanged } from "firebase/auth";

const Login = () => {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.auth);
  const { email, password, onInputchange } = useForm({
    email: "juansebas_9711@hotmail.com",
    password: "Seguridad1234!"
  });

  const isAuthenticated = useMemo(() => status === "authenticated", [status]);

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(loginAuth(email, password));
  };

  const handleGoogleLogin = () => {
    dispatch(loginWithGoogle());
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) return dispatch(logout());
      dispatch(login({ email: user.email }));
    });
  }, [dispatch]);

  return (
    <>
      <h1>Login</h1>
      <hr />
      <form onSubmit={onSubmit}>
        <input name="email" type="email" onChange={onInputchange} value={email} />
        <input name="password" type="password" onChange={onInputchange} value={password} />
        <button type="submit" disabled={isAuthenticated}>Ingresar</button>
      </form>
      <button onClick={handleGoogleLogin} disabled={isAuthenticated}>
        Ingresar con Google
      </button>
    </>
  );
};

export default Login;