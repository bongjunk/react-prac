import React from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import SigninContainer from "../containers/SigninContainer";
import useToken from "../hooks/useToken";

export default function Sigcnin() {
  const token = useToken();

  if (token !== null) {
    return (
      <Routes>
        <Route path="/" element={<Navigate replace to="/signin" />} />
      </Routes>
    );
  }

  return <SigninContainer />;
}
