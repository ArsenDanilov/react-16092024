import { DishCounter } from "../DishCounter/DishCounter";
import { ReviewForm } from "../Review-form/Review-form";
import { useUser } from "../user-context/use-user"; 

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

  const { auth } = useUser();
  const { isAuthorized } = auth;

  return (
    <div>
      <h2>{name}</h2>
      <h3>Menu:</h3>
      <ul>
        {menu.map((dish) => (
          <li>
            {dish.name}
            {auth.isAuthorized && <DishCounter />}
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
      {auth.isAuthorized && <ReviewForm />}
    </div>
  );
};
