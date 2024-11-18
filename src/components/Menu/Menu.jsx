import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/Restaurants";
import { selectDishes } from "../../redux/Dishes";
import { Link, useParams } from "react-router-dom";

export const Menu = () => {
  const { restaurantId } = useParams();

  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  const dishes = useSelector((state) => selectDishes(state));

  const { menu } = restaurant || {};

  const currentDishes = menu.map((id) => dishes[id]);

  if (!menu.length) {
    return null;
  }

  // const { auth } = useUser();
  // const { isAuthorized } = auth;

  return (
    <div>
      <h3>Menu:</h3>
      <ul>
        {currentDishes.map((dish) => (
          <li key={dish.id}>
            <Link to={`/dish/${dish.id}`}>{dish.name}</Link>;
            {/* <p>{dish.name}</p>
            <p>{dish.price}</p>
            <p>{dish.ingredients}</p>
            {auth.isAuthorized && <DishCounter id={dish.id} />} */}
          </li>
        ))}
      </ul>
    </div>
  );
};
