import { useState } from "react";
import { restaurants } from "../../../materials/mock";
import { Tab } from "../Tab/Tab";
import { Restaurant } from "../Restaurant/Restaurant";

export const RestaurantsPage = ({ title }) => {
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

      {restaurants.map(({ name, id }) => (
        <Tab
          key={id}
          title={name}
          onClick={() => handleSetActiveRestaurantId(id)}
          isActive={id === activeRestaurantId}
        />
      ))}

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
