/* eslint-disable react/prop-types */

import { Navigate, Outlet } from "react-router-dom"

export const ProtectedRoutes = ({ canActivate, redirectPath = "/" }) => {
  if (!canActivate) {
    return <Navigate to={redirectPath} replace />
  }

  return <Outlet />
}
