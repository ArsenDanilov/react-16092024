import { Link, useParams } from "react-router-dom";
import { useGetDishesQuery, useGetRestaurantByIdQuery } from "../../redux/services/api/api";



export const Menu = () => {
  const { restaurantId } = useParams();

  const { data: restaurant, isLoading, isError  } = useGetRestaurantByIdQuery(restaurantId);

  const { data: dataDishes } = useGetDishesQuery();

  if (isLoading) {
    return "loading";
  }

  if (isError) {
    return "error";
  }

  if (!dataDishes?.length) {
    return null;
  }  

  const { menu } = restaurant || { menu: [] };
  
  const currentDishes = dataDishes.filter((dish) => menu.includes(dish.id));

  console.log(currentDishes);
  

  if (!menu.length) {
    return null;
  }

  return (
    <div>
      <h3>Menu:</h3>
      <ul>
        {currentDishes.map((dish) => (
          <li key={dish.id}>
            <Link to={`/dish/${dish.id}`}>{dish.name}</Link>;
          </li>
        ))}
      </ul>
    </div>
  );
};
