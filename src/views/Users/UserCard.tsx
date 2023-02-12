import { Modal, useModal } from "../../shared/components/Modal";
import { IUser } from "../../shared/globalTypes";
import UserDelete from "./UserDelete";
import UserEdit from "./UserEdit";

interface IProps {
  user: IUser;
  key: number;
  onDelete: (user: IUser) => void;
  onUserEdit: (user: IUser) => void;
}

function UserCard({ user, onDelete, onUserEdit }: IProps) {


  return (
    <div>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <UserDelete onDelete={onDelete} user={user}/>
      <UserEdit onEdit={onUserEdit} user={user}/>
    </div>
  );
}

export default UserCard;
