import { useSelector } from "react-redux";
import { selectUserById, selectUsersRequestStatus } from "../../redux/User";

export const Review = ({ key, text, rating, userId }) => {

  const user = useSelector((state) => selectUserById(state, userId));

  const requestStatus = useSelector(selectUsersRequestStatus);

  if (requestStatus === "idle" || requestStatus === "pending"){ 
    return (
      'loading'
    );
  }

  return (
    <p key={key}>
      [{rating}] {user.name} : {text}
    </p>
  );
};
