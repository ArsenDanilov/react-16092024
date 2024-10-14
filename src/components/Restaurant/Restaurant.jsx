import { DishCounter } from "../DishCounter/DishCounter";
import { ReviewForm } from "../Review-form/Review-form";

export const Restaurant = ({ name, menu, reviews }) => {
  if (!reviews.length) {
    return null;
  }

  if (!menu.length) {
    return null;
  }

  if (!name) {
    return null;
  }

  return (
    <div>
      <h2>{name}</h2>
      <h3>Menu:</h3>
      <ul>
        {menu.map((dish) => (
          <li>
            {dish.name}
            <DishCounter />
          </li>
        ))}
      </ul>
      <h3>Reviews:</h3>
      <ul>
        {reviews.map((review) => (
          <li>{review.text}</li>
        ))}
      </ul>
      <h3>Review form</h3>
      <ReviewForm />
    </div>
  );
};
