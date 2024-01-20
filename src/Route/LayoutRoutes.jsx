import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./Routes";
import AppLayout from "../Layout/AppLayout";

const LayoutRoutes = () => {
  return (
    <>
      <Routes>
        {routes.map(({ path, Component }, i) => (
          <Fragment key={i}>
            <Route key={i} element={<AppLayout />}>
              <Route path={path} element={Component} />
            </Route>
          </Fragment>
        ))}
      </Routes>
    </>
  );
};

export default LayoutRoutes;
