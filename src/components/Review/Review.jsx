import { useDispatch, useSelector } from "react-redux";
import { selectUserById, selectUsersRequestStatus } from "../../redux/User";
import { useEffect } from "react";
import { getUsers } from "../../redux/User/get-users";

export const Review = ({ key, text, rating, userId }) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const user = useSelector((state) => selectUserById(state, userId));

  const requestStatus = useSelector(selectUsersRequestStatus);

  if (requestStatus === "idle" || requestStatus === "pending"){ 
    return (
      <br/>
    );
  }

  return (
    <p key={key}>
      [{rating}] {user.name} : {text}
    </p>
  );
};
