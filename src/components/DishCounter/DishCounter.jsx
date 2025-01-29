import { Counter } from "../Counter/Counter";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, selectAmountById } from "../../redux/ui/cart";
import dishCounterStyles from "./dishCounter.module.css";

export const DishCounter = ({ id, price, name }) => {

  const amount = useSelector((state) => selectAmountById(state, id));

  const dispatch = useDispatch();

  const increase = () => dispatch(addToCart({ id, price, name }));
  const decrease = () => dispatch(removeFromCart({ id, price, name }));

  // const { isAuth, toggleAuth, name, setName } = useUser();

  // const { isAuth, toggleAuth, name, setName } = useContext(UserContext);
  // Стабильные ссылки в концепции React - это ссылки, которые при ререндерах остаются одинаковыми

  // Хук useCallback() позволяет создавать стабильные ссылки на создаваемые объекты, как в useEffect()
  // Хук useCallback() позволяет создавать стабильные ссылки на создаваемые функции, пока ее зависимости не изменятся, как в useEffect()
  // useCallback кэширует функцию между повторными рендерами, пока ее зависимости не изменятся.
  // Создать стабильную ссылку между рендерами - единственная задача хука useCallback()

  // Хук useMemo() используется, чтобы хранить стабильные ссылки на значения. Он сохраняет возвращаемое значение функции, а не саму функцию

  return (
    <div>
      <Counter
        value={amount}
        increase={increase}
        decrease={decrease}
        // className={
        //   (dishCounterStyles.dishCounter,
        //   {
        //     [styles.light]: theme === "light",
        //     [styles.dark]: theme === "dark",
        //   })
        // }
        className={dishCounterStyles.dishCounter}
      />
    </div>
  );
};
