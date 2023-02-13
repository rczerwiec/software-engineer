import UserDelete from "./UserDelete";
import UserEdit from "./UserEdit";
import { IUser } from "../../shared/globalTypes";
import { FaUserCircle } from "react-icons/fa";
import { motion } from "framer-motion";

interface IProps {
  user: IUser;
  key: number;
}

function UserCard({ user }: IProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex justify-between border-b p-4 items-center"
    >
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
    </motion.div>
  );
}

export default UserCard;
