import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";



export default function Layout(){
    const navigate = useNavigate();
    const location = useLocation();

    const pathname = location.pathname;
  useEffect(() =>{
      if (location.pathname == "/") {
        navigate("/Earth");
      }
  }, [navigate, pathname, location.pathname]);
  return(
    <div className="bg-[#070724] min-w-screen min-h-screen flex flex-col gap-[20px]">
        <Header />
        <Outlet />
    </div>
  );
}