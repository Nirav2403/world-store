import React from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { routes } from ".";

const RoutePaths = () => {
  const isAuthenticated = localStorage.getItem("token");

  const renderRoutes = () =>
    routes.map((route, index) => {
      if (route.isProtected && !isAuthenticated) {
        return (
          <Route
            key={index}
            {...route}
            element={<Navigate to="/login" replace />}
          />
        );
      }

      return route.wrapperComponent ? (
        <Route
          key={index}
          {...route}
          element={
            <route.wrapperComponent>
              <Outlet />
            </route.wrapperComponent>
          }
        >
          <Route {...route} element={<route.component />} />
        </Route>
      ) : (
        <Route key={index} {...route} />
      );
    });

  console.log(renderRoutes());
  return <Routes>{renderRoutes()}</Routes>;
};

export default RoutePaths;
