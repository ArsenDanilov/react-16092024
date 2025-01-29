import styles from "./dish.module.css";
import { DishCounter } from "../DishCounter/DishCounter";
import { useUser } from "../user-context/use-user";

export const Dish = ({ name, price, ingredients, id }) => {
  const joinedIngregients = ingredients.join(", ");

  const { auth } = useUser();
  const { isAuthorized } = auth;

  return (
    <div className={styles.dish}>
      <div className={styles.dish__info}>
        <p className={styles.dish__name}>{name}</p>
        <p className={styles.dish__ingredients}>{joinedIngregients}</p>
        <p className={styles.dish__price}>{`Цена блюда: ${price}.00 $`}</p>
      </div>
      <div className={styles.dish__counter}>
        {isAuthorized && <DishCounter id={id} price={price} name={name} />}
      </div>
    </div>
  );
};
