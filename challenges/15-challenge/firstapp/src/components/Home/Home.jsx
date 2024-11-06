import React from "react";
import { useDispatch } from "react-redux";
import { logoutAuth } from "../../store/slices/auth/Thunks";

const Home = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutAuth());
  };

  return (
    <>
      <h1>Home</h1>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default Home;