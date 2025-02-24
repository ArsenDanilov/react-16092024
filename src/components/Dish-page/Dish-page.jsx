import { DishCounter } from "../DishCounter/DishCounter";
import { useUser } from "../user-context/use-user";
import { useParams } from "react-router-dom";
import { useGetDishByIdQuery } from "../../redux/services/api/api";
import { Loader } from "../Loader/Loader";

export const DishPage = () => {
  const { dishId } = useParams();

  const { data: dish, isFetching, isError } = useGetDishByIdQuery(dishId);  

  const { auth } = useUser();
  const { isAuthorized } = auth;

  if (!dish) {
    return null;
  }

  if (isFetching) {
    return <Loader />;
  }

  if (isError) {
    return "error";
  }

  return (
    <ul>
      <li key={dish.id}>
        <p>{`Название блюда: `}</p>
        <p>{`Цена блюда: ${dish.price}$`}</p>
        <p>{`Ингредиенты блюда: ${dish.ingredients}`}</p>
        {isAuthorized && <DishCounter id={dish.id} />}
      </li>
    </ul>
  );
};
