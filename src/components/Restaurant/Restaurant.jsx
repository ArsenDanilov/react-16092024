import { MenuTab } from "../Menu-tab/Menu-tab";
import { Outlet } from "react-router-dom";
import { ReviewsTab } from "../Reviews-tab/Reviews-tab";
import styles from "./restaurant.module.css"

export const Restaurant = () => {
  return (
    <div>
      <div className={styles.restaurant__tabs}>
        <MenuTab />
        <ReviewsTab />
      </div>
      <Outlet />
    </div>
  );
};
