import { useGetUsersQuery } from "../../redux/services/api/api";
import { useUser } from "../user-context/use-user";

export const Review = ({ key, text, rating, userId }) => {

  const { data: usersArr, isLoading, isError } = useGetUsersQuery();

  const { auth } = useUser();

  if (isLoading) {
    return "loading";
  }

  if (isError) {
    return "error";
  }

  console.log(userId === auth.id)

  const user = usersArr.find(findedUser => findedUser.id === userId);

  console.log(userId);
  

  const name = user? user.name : auth.name;

  return (  
    <p key={key}>
      [{rating}] {name} : {text}
    </p>
  );
};
