import styles from "./Restaurants-page.module.css";
import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../../redux/Restaurants";
import { RestaurantTab } from "../restaurant-tab/restaurant-tab";
import { Outlet, useParams } from "react-router-dom";

export const RestaurantsPage = ({ title }) => {
  const { restaurantId } = useParams();

  const restaurants = useSelector((state) => selectRestaurantsIds(state));


  return (
    <div>
      <h2>{title}</h2>
      <div className={styles.cuisineList}>
        {restaurants.map((id) => (
          <RestaurantTab key={id} id={id} isActive={id === restaurantId} />
        ))}
      </div>

      <Outlet />
    </div>
  );
};
