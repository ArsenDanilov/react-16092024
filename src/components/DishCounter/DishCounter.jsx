import { Counter } from "../Counter/Counter";
import { useCount } from "./use-count";

// import { useUser } from "../user-context/use-user";
// import { UserContext } from "../user-context";

import styles from "../Counter/counter.module.css";
import { useTheme } from "../theme-context/use-theme";
// import { useContext } from "react";

export const DishCounter = () => {
  const { value, increase, decrease } = useCount();

  const { theme } = useTheme();
  // const { isAuth, toggleAuth, name, setName } = useUser();

  // const { isAuth, toggleAuth, name, setName } = useContext(UserContext);
  // Стабильные ссылки в концепции React - это ссылки, которые при ререндерах остаются одинаковыми

  // Хук useCallback() позволяет создавать стабильные ссылки на создаваемые объекты, как в useEffect()
  // Создать стабильную ссылку между рендерами - единственная задача хука useCallback()

  // Хук useMemo() используется, чтобы хранить стабильные ссылки на значения. Он сохраняет значение функции, а не саму функцию

  return (
    <div>
      {/* {isAuth && (<h1>Юзер авторизован</h1>)}

      <h3>User auth - {isAuth.toString()}</h3>
      <button onClick={toggleAuth}>Toggle auth</button>
      <h4>User name - {name}</h4> 
      <input type="text" value={name} onKeyUp={(e) => setName(e.key)} /> */}

      <Counter
        value={value}
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
