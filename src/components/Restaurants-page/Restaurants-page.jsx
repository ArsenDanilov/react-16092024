import styles from "./Restaurants-page.module.css";
import { useGetRestaurantsQuery } from "../../redux/services/api/api";
import { RestaurantCard } from "../Restaurant-card/Restaurant-card";
import { Loader } from "../Loader/Loader";

export const RestaurantsPage = () => {
  
  const { data, isLoading, isError } = useGetRestaurantsQuery();

  if (isLoading) {
     return <Loader />;
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
        {data.map(({id, name, description, img, reviews, rating}) => (
          <RestaurantCard key={id} id={id} name={name} description={description} img={img} reviews={reviews} rating={rating}/>
        ))}
      </div>
    </div>
  );
};
