import { useUser } from "../user-context/use-user";

export const Review = ({ key, text, rating, user }) => {

  const { auth } = useUser();

  const name = user? user.name : auth.name;

  return (  
    <p key={key}>
      [{rating}] {name} : {text}
    </p>
  );
};
