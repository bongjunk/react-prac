import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AddContainer from "../containers/AddContainer";
import useToken from "../hooks/useToken";

export default function Add() {
  const token = useToken();

  if (token === null) {
    return (
      <>
        <Routes>
          <Route path="/" element={<Navigate replace to="/signin" />} />
        </Routes>
      </>
    );
  }

  return <AddContainer />;
}
