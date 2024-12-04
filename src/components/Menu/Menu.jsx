import { Link, useParams } from "react-router-dom";
import { useGetDishesByRestaurantIdQuery } from "../../redux/services/api/api";

export const Menu = () => {
  const { restaurantId } = useParams();

  const { data: dishes, isFetching, isError } = useGetDishesByRestaurantIdQuery(restaurantId);

  if (!dishes?.length) {
    return null;
  }

  if (isFetching) {
    return "loading";
  }

  if (isError) {
    return "error";
  }

  return (
    <div>
      <h3>Menu:</h3>
      <ul>
        {dishes.map((dish) => (
          <li key={dish.id}>
            <Link to={`/dish/${dish.id}`}>{dish.name}</Link>;
          </li>
        ))}
      </ul>
    </div>
  );
};
