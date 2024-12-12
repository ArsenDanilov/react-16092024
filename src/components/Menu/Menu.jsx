import { Link, useParams } from "react-router-dom";
import { useGetDishesByRestaurantIdQuery } from "../../redux/services/api/api";
import styles from "./menu.module.css"

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
    <div className={styles.menu}>
      <ul className={styles.menu__list}>
        {dishes.map((dish) => (
          <li className={styles.menu__item} key={dish.id}>
            <Link to={`/dish/${dish.id}`}>{dish.name}</Link>;
          </li>
        ))}
      </ul>
    </div>
  );
};
