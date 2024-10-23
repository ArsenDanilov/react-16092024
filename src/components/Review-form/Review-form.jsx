import { Counter } from "../Counter/Counter";
import { useForm } from "./use-form";
import { Button } from "../Button/Button";

export const ReviewForm = () => {

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
      <Button onClick={() => setClear} type={"reset"} text={"Clear"} />
    </form>
  );
};
