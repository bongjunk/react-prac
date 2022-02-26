import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BookReqType, RootState } from "../types";
import { useNavigate } from "react-router-dom";
import { logout as logoutSagaStart } from "../redux/modules/auth";
import Add from "../components/Add";
import { addBook as addBookSagaStart } from "../redux/modules/books";

const AddContainer = () => {
  const navigate = useNavigate();

  const loading = useSelector<RootState, boolean>((state) => {
    return state.books.loading;
  });

  const dispatch = useDispatch();

  const back = useCallback(() => {
    dispatch(navigate(-1));
  }, [dispatch]);

  const add = useCallback(
    (book: BookReqType) => {
      dispatch(addBookSagaStart(book));
    },
    [dispatch]
  );

  const logout = useCallback(() => {
    dispatch(logoutSagaStart());
  }, [dispatch]);

  return <Add loading={loading} back={back} logout={logout} add={add} />;
};

export default AddContainer;