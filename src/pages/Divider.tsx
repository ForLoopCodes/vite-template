import { Outlet } from "react-router-dom";
import { AppHeader } from "@/components/customElements/AppHeader";

export const Divider = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <AppHeader isLoggedIn={true} userType={"customer"} />
      <Outlet />
    </div>
  );
};
