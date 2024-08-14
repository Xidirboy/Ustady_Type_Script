import React, { ReactNode, Suspense, lazy } from "react";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import "./i18n.tsx";
const LoadingMain = lazy(() => import("../sections/utilsSections/LoadingMain.tsx"));

interface AppState {
  loading: boolean;
}
const useTypedSelector: TypedUseSelectorHook<AppState> = useSelector;
const WebProvider = ({ children }: { children: ReactNode }) => {
  const { i18n } = useTranslation();
  const loading = useTypedSelector((state) => state.loading);
  return (
    <>
      <div>
        {children}
        <Suspense>{loading && <LoadingMain />}</Suspense>
      </div>
    </>
  );
};
export default WebProvider;
