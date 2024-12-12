import styles from "./Restaurants-page.module.css";
import { RestaurantTab } from "../restaurant-tab/restaurant-tab";
import { Outlet, useParams } from "react-router-dom";
import { useGetRestaurantsQuery } from "../../redux/services/api/api";
import { RestaurantCard } from "../Restaurant-card/Restaurant-card";

export const RestaurantsPage = ({ title }) => {
  
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


  // return (
  //   <div className={styles.restaurantsPage}>
  //     <div className={styles.cuisineList}> 
  //     <span>{'Это Тайтл идущий из App.jsx'}</span>
  //       {data.map(({name, id}) => (
  //         <RestaurantTab key={id} name={name} id={id} isActive={id === restaurantId} />
  //       ))}
  //     </div>
  //     <Outlet />
  //   </div>
  // );

  return (
    <div className={styles.restaurantsPage}>
      <div className={styles.cuisineList}> 
        <h1>{title}</h1>
        {data.map(({id, name, description, img}) => (
          <RestaurantCard key={id} id={id} name={name} description={description} img={img} />
        ))}
      </div>
      {/* <Outlet /> */}
    </div>
  );
};
