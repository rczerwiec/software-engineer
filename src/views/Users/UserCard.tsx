import { IUser } from "../../shared/globalTypes";
import {FaUserCircle} from "react-icons/fa"
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
    <div className="flex justify-between border-b p-4 items-center">
      <div className="flex gap-2">
        <FaUserCircle className="w-12 h-12 rounded-full"></FaUserCircle>
        <div>
          <h3 className="font-semibold">{user.name}</h3>
          <p className="text-sm">{user.email}</p>
        </div>
      </div>
      <div className="flex gap-2">
        <UserDelete onDelete={onDelete} user={user} />
        <UserEdit onEdit={onUserEdit} user={user} />
      </div>
    </div>
  );
}

export default UserCard;
