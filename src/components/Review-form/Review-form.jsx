import { Counter } from "../Counter/Counter";
import { useForm } from "./use-form";
import styles from "../Button/button.module.css";
import classNames from "classnames";
import { useTheme } from "../theme-context/use-theme";

export const ReviewForm = () => {

  const { theme } = useTheme();

  const { name, text, rating, setName, setText, setRating, setClear } =
    useForm();

  const increaseHandler = () => {
    if (rating < 5) {
      setRating(rating + 1);
    }
  };
  const decreaseHandler = () => {
    if (rating > 0) {
      setRating(rating - 1);
    }
  };

  return (
    <form action="" onReset={() => setClear()}>
      <div>
        <span>name</span>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div>
        <span>text</span>
        <input
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
      </div>
      <div>
        <span>rating</span>
        <Counter
          value={rating}
          increase={increaseHandler}
          decrease={decreaseHandler}
        />
      </div>
      <button
        className={classNames(styles.button, {
          [styles.light]: theme === "light",
          [styles.dark]: theme === "dark",
        })}
        type="reset"
        onClick={() => setClear()}
      >
        clear
      </button>
    </form>
  );
};
