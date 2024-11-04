/* eslint-disable react/prop-types */
import { useEffect, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function RefreshHandler({ setIsAuthorised }) {
  const location = useLocation();
  const navigate = useNavigate();

  const updateAuthorization = useCallback(() => {
    if (localStorage.getItem("token")) {
      setIsAuthorised(true);
    }
  }, [setIsAuthorised]);

  useEffect(() => {
    updateAuthorization();

    if (
      location.pathname === "/" ||
      location.pathname === "/login" ||
      location.pathname === "/signup"
    ) {
      navigate("/", { replace: false });
    }
  }, [location, navigate, updateAuthorization]);

  return null;
}

export default RefreshHandler;
