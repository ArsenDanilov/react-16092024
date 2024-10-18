import { useState } from "react";
import { restaurants } from "../../../materials/mock";
import { Tab } from "../Tab/Tab";
import { Restaurant } from "../Restaurant/Restaurant";
import styles from "./Restaurants-page.module.css";
import classNames from "classnames";

export const RestaurantsPage = ({ title, isActive }) => {
  const [activeRestaurantId, setActiveRestaurantId] = useState(
    restaurants[0].id
  );

  const activeRestaurant = restaurants.find(
    ({ id }) => id === activeRestaurantId
  );

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
        {restaurants.map(({ name, id }) => (
          <Tab
            key={id}
            title={name}
            onClick={() => handleSetActiveRestaurantId(id)}
            isActive={id === activeRestaurantId}
          />
        ))}
      </div>

      {activeRestaurant && (
        <Restaurant
          key={activeRestaurant.id}
          name={activeRestaurant.name}
          menu={activeRestaurant.menu}
          reviews={activeRestaurant.reviews}
        />
      )}
    </div>
  );
};
