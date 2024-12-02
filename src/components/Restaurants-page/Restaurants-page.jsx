import styles from "./Restaurants-page.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurantsIds, selectRestaurantsRequestStatus } from "../../redux/Restaurants";
import { RestaurantTab } from "../restaurant-tab/restaurant-tab";
import { Outlet, useParams } from "react-router-dom";
import { useEffect } from "react";
import { getRestaurants } from "../../redux/Restaurants/get-restaurants";
import { useRequest } from "../../redux/ui/request/use-request";
import { useGetRestaurantsQuery } from "../../redux/services/api/api";


export const RestaurantsPage = ({ title }) => {
  const { restaurantId } = useParams();
  
  const { data, isLoading, isError } = useGetRestaurantsQuery();

  if (isLoading) {
    return "loading";
  }

  if (isError) {
    return "error";
  }

  if (!data?.length) {
    return null;
  }


  return (
    <div>
      <h2>{title}</h2>
      <div className={styles.cuisineList}> 
        {data.map(({name, id}) => (
          <RestaurantTab key={id} name={name} id={id} isActive={id === restaurantId} />
        ))}
      </div>
      <Outlet />
    </div>
  );
};
