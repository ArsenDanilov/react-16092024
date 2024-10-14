import { Counter } from "../Counter/Counter";
import { useCount } from "./use-count";

export const DishCounter = () => {
  const { value, increase, decrease } = useCount();


  // Стабильные ссылки в концепции React - это ссылки, которые при ререндерах остаются одинаковыми

  // Хук useCallback() позволяет создавать стабильные ссылки на создаваемые объекты, как в useEffect()
  // Создать стабильную ссылку между рендерами - единственная задача хука useCallback()

  // Хук useMemo() используется, чтобы хранить стабильные ссылки на значения. Он сохраняет значение функции, а не саму функцию


  return (
    <div>
      <Counter value={value} increase={increase} decrease={decrease} />
    </div>
  );
};
