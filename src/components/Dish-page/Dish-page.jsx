import { useDispatch, useSelector } from "react-redux";
import { DishCounter } from "../DishCounter/DishCounter";
import { useUser } from "../user-context/use-user";
import { selectDishById, selectDishesRequestStatus } from "../../redux/Dishes";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getDishes } from "../../redux/Dishes/get-dishes";

export const DishPage = () => {
  const { dishId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDishes());
  }, [dispatch]);

  const dish = useSelector((state) => selectDishById(state, dishId));

  const requestStatus = useSelector(selectDishesRequestStatus);

  const { auth } = useUser();
  const { isAuthorized } = auth;

  if (requestStatus === "idle" || requestStatus === "pending") {
    return (
      <div>
        <p>loading...</p>
      </div>
    );
  }

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
