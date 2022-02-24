import { Route, Navigate, Routes } from "react-router-dom";
import ListContainer from "../containers/ListContainer";
import useToken from "../hooks/useToken";

export default function Home() {
  const token = useToken();

  if (token === null) {
    return (
      <Routes>
        <Route path="/" element={<Navigate replace to="/signin" />} />
      </Routes>
    );
  }

  return <ListContainer />;
}
