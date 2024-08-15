import React, { useEffect } from "react";
import Header from "./Header.tsx";

import { useDispatch, useSelector } from "react-redux";

import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { RootState } from "../../utils/reducers";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> =
    useDispatch();
  const user = useSelector((state: RootState) => state.user);

  // useEffect(() => {
  //   if (!user?.id) {
  //     getUser();
  //   }
  // }, [user?.id]);

  // const getUser = async () => {
  //   try {
  //     const response = await Axios().get(`api/v1/auth/me`);
  //     dispatch({ type: "SET_USER", payload: response?.data?.user ?? {} });
  //   } catch (error) {
  //     // Xatoliklarni qayta ishlash
  //   }
  // };

  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
