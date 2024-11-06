import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../firebase/config";
import { useForm } from "../../hooks/useForm";
import { logout, register } from "../../store/slices/auth/AuthSlice";
import { registerAuth } from "../../store/slices/auth/Thunks";
import { onAuthStateChanged } from "firebase/auth";

const Registro = () => {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.auth);
  const { email, password, onInputchange } = useForm({
    email: "juansebas_9711@hotmail.com",
    password: "Seguridad1234!"
  });

  const isAuthenticated = useMemo(() => status === "authenticated", [status]);

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(registerAuth(email, password));
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) return dispatch(logout());
      dispatch(register({ email: user.email }));
    });
  }, [dispatch]);

  return (
    <>
      <h1>Registro</h1>
      <hr />
      <form onSubmit={onSubmit}>
        <input name="email" type="email" onChange={onInputchange} value={email} />
        <input name="password" type="password" onChange={onInputchange} value={password} />
        <button type="submit" disabled={isAuthenticated}>Registro</button>
      </form>
    </>
  );
};

export default Registro;