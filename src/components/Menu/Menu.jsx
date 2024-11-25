import { useDispatch, useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/Restaurants";
import { selectDishes, selectDishesRequestStatus } from "../../redux/Dishes";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { getDishes } from "../../redux/Dishes/get-dishes";

export const Menu = () => {
  const { restaurantId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDishes());
  }, [dispatch]);

  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  const dishes = useSelector((state) => selectDishes(state));
  console.log(dishes);

  const requestStatus = useSelector(selectDishesRequestStatus);

  if (requestStatus === "idle" || requestStatus === "pending") {
    return (
      <div>
        <p>loading...</p>
      </div>
    );
  }

  const { menu } = restaurant || {};

  const currentDishes = menu.map((id) => dishes[id]);

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
