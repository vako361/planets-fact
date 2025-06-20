import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Header from "./Header";
import { useEffect } from "react";
import type { MyComponentProps } from "../db";

export default function Layout({ menu, setMenu }: MyComponentProps) {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/Earth");
    }
  }, [navigate, location.pathname]);

  return (
    <div className="bg-[#070724] min-w-screen min-h-screen flex flex-col gap-[20px]">
      <Header menu={menu} setMenu={setMenu} />
      <Outlet />
    </div>
  );
}
