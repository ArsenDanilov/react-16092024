import classNames from "classnames";
import styles from "../Button/button.module.css";
import counterStyles from "./counter.module.css";

export const Counter = ({ value, increase, decrease, className }) => {

  return (
    <div className={counterStyles.counter}>
      <button
        className={classNames(styles.button, className)}
        type="button"
        onClick={increase}
      >
        +
      </button>
      {value}
      <button
        className={classNames(styles.button, className)}
        type="button"
        onClick={decrease}
      >
        -
      </button>
    </div>
  );
};

// хук useEffect принимает 2 параметра: 1 - эффект коллбэк, 2 - массив зависимостей
// В реакте эффектами называются различные сторонние действия: поход к серверу, использование различных API, браузерных API, localStorage - то, что напрямую не связано - дополнительное действие на стороне

// Если хотя бы один элемент из массива зависимостей отличается, то Реакт выполняет эффект. При помощи массива зависимостей, мы можем контролировать, на какие этапы жизненного цикла компонента мы будем завязываться

// Мы передаем в useEffect первым параметром функцию. Если она изменяет состояние компонента, то сработает ререндер. Если нет, то нет

// Если массив зависимостей есть и он пустой, то эффект выполнится только на этапе mount, то есть, на отрисовке. Поскольку массив пустой, то состояние компонента никогда не изменится, а значит, эффект будет срабатывать только на отрисовке

// Если мы хотим подвязаться на каждый ререндер, то массив зависимостей нам вообще не нужен, но в таком случае, это не будет эффектом. Это будет просто функция, которая будет вызываться при каждом ререндере

// Если мы укажем в массиве зависимостей value, то эффект будет срабатывать на mount и каждый ререндер

// Чтобы завязаться на unmount, нам нужно из эффекта вернуть функцию. Такая функция называется cleanup. Она сработает только при unmount - то есть, при удалении компонента

// При пустом массиве зависимостей мы завязываемся только на mount и unmount

// const [value, setValue] = useState(initValue);

// useEffect(() => {
//   const onScroll = () => console.log("scroll");

//   window.addEventListener("scroll", onScroll);

//   return () => {
//     window.removeEventListener("scroll", onScroll);
//   };
// }, []);

// useEffect(() => {
//   console.log(value);

//   return () => {
//     console.log("unmount");
//   };
// }, [value]);

// useEffect(() => {
//   onChange && onChange(value);
// }, [value]);

// const increase = () => {
//   if (value < 5) {
//     setValue(value + 1);
//   }
// };
// const decrease = () => {
//   if (value > 0) {
//     setValue(value - 1);
//   }
// };
