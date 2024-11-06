import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/Dishes";

export const CartItem = ({ id, amount }) => {
  const { name } = useSelector((state) => selectDishById(state, id)) || {};

  if (!name) {
    return null;
  }

  return (
    <div>
      {name} - {amount}
    </div>
  );
};
