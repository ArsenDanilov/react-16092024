import { ReviewStar } from "../Review-star/Review-star";

export const ReviewStars = ({ setRating, rating }) => {
  
  const handleStarClick = (index) => {
    const newRating = rating === index ? index - 1 : index;
    setRating(newRating);
  };

  return (
    <div>
      {Array.from({ length: 5 }, (_, index) => {
        const starIndex = index + 1;
        return (
          <ReviewStar
            key={starIndex}
            isSelected={starIndex <= rating}
            onClick={() => handleStarClick(starIndex)}
          />
        );
      })}
    </div>
  );
};
