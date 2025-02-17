import styles from "./Restaurants-page.module.css";
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

  return (
    <div className={styles.restaurantsPage}>
      <div className={styles.cuisineList}> 
        <h1>{title}</h1>
        {data.map(({id, name, description, img}) => (
          <RestaurantCard key={id} id={id} name={name} description={description} img={img} />
        ))}
      </div>
    </div>
  );
};
