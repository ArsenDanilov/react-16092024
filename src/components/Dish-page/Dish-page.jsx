import { useSelector } from "react-redux";
import { DishCounter } from "../DishCounter/DishCounter";
import { useUser } from "../user-context/use-user";
import { selectDishById } from "../../redux/Dishes";
import { useParams } from "react-router-dom";

export const DishPage = () => {
  const { dishId } = useParams();

  const dish = useSelector((state) => selectDishById(state, dishId));


  const { auth } = useUser();
  const { isAuthorized } = auth;

  return (
    <ul>
      <li key={dish.id}>
        <p>{`Название блюда: ${dish.name}`}</p>
        <p>{`Цена блюда: ${dish.price}$`}</p>
        <p>{`Ингредиенты блюда: ${dish.ingredients}`}</p>
        {auth.isAuthorized && <DishCounter id={dish.id} />}
      </li>
    </ul>
  );
};
