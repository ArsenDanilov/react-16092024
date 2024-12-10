import styles from "./Restaurants-page.module.css";
import { RestaurantTab } from "../restaurant-tab/restaurant-tab";
import { Outlet, useParams } from "react-router-dom";
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
    <div className={styles.restaurantsPage}>
      
      <div className={styles.cuisineList}> 
      <span>{title}</span>
        {data.map(({name, id}) => (
          <RestaurantTab key={id} name={name} id={id} isActive={id === restaurantId} />
        ))}
      </div>
      <Outlet />
    </div>
  );
};
