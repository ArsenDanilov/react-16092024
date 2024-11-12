import { useState } from "react";
import { restaurants } from "../../../materials/mock";
import { Restaurant } from "../Restaurant/Restaurant";
import styles from "./Restaurants-page.module.css";
import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../../redux/Restaurants";
import { RestaurantTab } from "../restaurant-tab/restaurant-tab";
import { Outlet } from "react-router-dom";

export const RestaurantsPage = ({ title }) => {

  return (
    <div>
      <h2>{title}</h2>
      <div className={styles.cuisineList}>
        {restaurants.map(({ id }) => (
          <RestaurantTab key={id} id={id} />
        ))}
      </div>

      <Outlet />
    </div>
  );
};
