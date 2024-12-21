import { Header } from "@/elements/Header";
import { Outlet } from "react-router-dom";

export const Divider = () => {
  return (
    <div className="w-full min-h-screen h-full bg-black overflow-x-hidden">
      <Header />
      <Outlet />
    </div>
  );
};
