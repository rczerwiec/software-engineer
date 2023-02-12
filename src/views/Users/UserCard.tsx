import { IUser } from "../../shared/globalTypes";

interface IProps {
  children: never[];
  user: IUser;
  key: number;
  onDelete: (user: IUser) => void;
  onEdit: (user: IUser) => void;
}

function UserCard({ user, onDelete, onEdit }: IProps) {
  return (
    <div>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <div
        onClick={() => {
          onDelete(user);
        }}
      >
        Delete
      </div>
      <div onClick={() => onEdit(user)}>Edit</div>
    </div>
  );
}

export default UserCard;
