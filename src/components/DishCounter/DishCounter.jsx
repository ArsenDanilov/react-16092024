import { Counter } from "../Counter/Counter";
import styles from "../Counter/counter.module.css";
import { useTheme } from "../theme-context/use-theme";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, selectAmountById } from "../../redux/ui/cart";

export const DishCounter = ({ id }) => {

  const amount = useSelector((state) => selectAmountById(state, id));

  const dispatch = useDispatch();

  const increase = () => dispatch(addToCart(id));
  const decrease = () => dispatch(removeFromCart(id));

  const { theme } = useTheme();
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
      {/* {isAuth && (<h1>Юзер авторизован</h1>)}

      <h3>User auth - {isAuth.toString()}</h3>
      <button onClick={toggleAuth}>Toggle auth</button>
      <h4>User name - {name}</h4> 
      <input type="text" value={name} onKeyUp={(e) => setName(e.key)} /> */}

      <Counter
        value={amount}
        increase={increase}
        decrease={decrease}
        className={
          (styles.dishCounter,
          {
            [styles.light]: theme === "light",
            [styles.dark]: theme === "dark",
          })
        }
      />
    </div>
  );
};
