import { MenuTab } from "../Menu-tab/Menu-tab";
import { Outlet } from "react-router-dom";
import { ReviewsTab } from "../Reviews-tab/Reviews-tab";


export const Restaurant = () => {  
  
  return (
    <div>
      <MenuTab />
      <ReviewsTab />
      <Outlet />
    </div>
  );
};

