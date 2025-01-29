import { useParams } from "react-router-dom";
import { Cart } from "../Cart/Cart";
import { useGetDishesByRestaurantIdQuery } from "../../redux/services/api/api";
import styles from "./menu.module.css";
import { Dish } from "../Dish/Dish";

export const Menu = () => {
  const { restaurantId } = useParams();

  const {
    data: dishes,
    isFetching,
    isError,
  } = useGetDishesByRestaurantIdQuery(restaurantId);

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
    <div className={styles.menu}>
      <div className={styles.menu__container}>
        <ul className={styles.menu__list}>
          {dishes.map((dish) => (
            <li key={dish.id}>
              <Dish
                name={dish.name}
                price={dish.price}
                ingredients={dish.ingredients}
                id={dish.id}
              />
            </li>
          ))}
        </ul>
        <Cart />
      </div>
    </div>
  );
};
