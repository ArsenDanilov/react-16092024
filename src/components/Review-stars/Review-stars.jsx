import { useState } from "react";
import { ReviewStar } from "../Review-star/Review-star";

export const ReviewStars = ({ setRating, rating }) => {
  const [selectedStars, setSelectedStars] = useState(0);

  const handleStarClick = (index) => {
    if (selectedStars === index) {
      setSelectedStars(index - 1);
    } else {
      setSelectedStars(index);
    }

    rating = index;

    setRating(rating);
  };

  return (
    <div>
      {Array.from({ length: 5 }, (_, index) => (
        <ReviewStar
          key={index}
          isSelected={index < selectedStars}
          onClick={() => handleStarClick(index + 1)}
        />
      ))}
    </div>
  );
};
