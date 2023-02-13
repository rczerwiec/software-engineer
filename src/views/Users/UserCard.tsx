import { IUser } from "../../shared/globalTypes";
import {FaUserCircle} from "react-icons/fa"
import UserDelete from "./UserDelete";
import UserEdit from "./UserEdit";

interface IProps {
  user: IUser;
  key: number;
}

function UserCard({ user }: IProps) {
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
        <UserDelete user={user} />
        <UserEdit user={user} />
      </div>
    </div>
  );
}

export default UserCard;
