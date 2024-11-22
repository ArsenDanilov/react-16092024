import styles from "./Restaurants-page.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurantsIds, selectRestaurantsRequestStatus } from "../../redux/Restaurants";
import { RestaurantTab } from "../restaurant-tab/restaurant-tab";
import { Outlet, useParams } from "react-router-dom";
import { useEffect } from "react";
import { getRestaurants } from "../../redux/Restaurants/get-restaurants";

import { getDishes } from "../../redux/Dishes/get-dishes";

window.test2 = getDishes;

console.log(window.test2);

export const RestaurantsPage = ({ title }) => {
  const { restaurantId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    console.log('use effect in Rest Page');
    dispatch(getRestaurants());
    // dispatch(getDishes());
  }, [dispatch]);

  const restaurants = useSelector((state) => selectRestaurantsIds(state));

  const requestStatus = useSelector(selectRestaurantsRequestStatus);

  if (requestStatus === "idle" || requestStatus === "pending"){ // TODO: ЭТО СКЕЛЕТОН - КОМПОНЕНТ, КОТОРЫЙ ВЫГЛЯДИТ ПОЧТИ 1 В 1, КАК НАШ КОМПОНЕНТ, ТОЛЬКО БЕЗ ДАННЫХ
    return "loading";
  }


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
