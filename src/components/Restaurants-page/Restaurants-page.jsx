import { useState } from "react";
import { restaurants } from "../../../materials/mock";
import { Restaurant } from "../Restaurant/Restaurant";
import styles from "./Restaurants-page.module.css";
import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../../redux/Restaurants";
import { RestaurantTab } from "../restaurant-tab/restaurant-tab";

export const RestaurantsPage = ({ title, isActive }) => {
  const restaurantsIds = useSelector(selectRestaurantsIds); 

  const [activeRestaurantId, setActiveRestaurantId] = useState(restaurantsIds[0]);

  const handleSetActiveRestaurantId = (id) => {
    if (activeRestaurantId === id) {
      return;
    }

    setActiveRestaurantId(id);
  };

  return (
    <div>
      <h2>{title}</h2>

      <div className={styles.cuisineList}>
        {restaurants.map(({ id }) => (
          <RestaurantTab
            key={id}
            id={id}
            onClick={() => handleSetActiveRestaurantId(id)}
            isActive={id === activeRestaurantId}
          />
        ))}
      </div>

      <Restaurant key={activeRestaurantId} id={activeRestaurantId} />
    </div>
  );
};
