import { useSelector } from "react-redux";
import { selectDishesById } from "../../redux/Dishes";

export const CartItem = ({ id, amount }) => {
  const { name } = useSelector((state) => selectDishesById(state, id)) || {};

  if (!name) {
    return null;
  }

  return (
    <div>
      {name} - {amount}
    </div>
  );
};
