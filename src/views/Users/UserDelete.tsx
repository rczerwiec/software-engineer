import Button from "../../shared/components/Buttons/Button";
import { IUser } from "../../shared/globalTypes";
import { IoMdTrash } from "react-icons/io";
import { useDeleteUserMutation } from "../../shared/store";
import { Modal, useModal } from "../../shared/components/Modal";
import displayToast from "../../shared/utils/displayToast";
import { GrClose } from "react-icons/gr";
import { motion } from "framer-motion";

interface IProps {
  user: IUser;
}

function UserDelete({ user }: IProps) {
  const { isVisible, closeModal, toggleModal } = useModal();
  const [deleteUser] = useDeleteUserMutation();

  const onUserDelete = async (user: IUser) => {
    return await deleteUser(user.id)
      .unwrap()
      .then((res) => {
        console.log("res from api:", res);
        displayToast({ type: "success", message: "Successfully deleted user" });
      })
      .catch((err) => {
        displayToast({ type: "error", message: "Unexpected error" });
      });
  };

  return (
    <div>
      <div
        onClick={() => {
          toggleModal();
        }}
      >
        <IoMdTrash className="w-6 h-6 text-gray-400 hover:cursor-pointer" />
      </div>
      <Modal isVisible={isVisible} onClose={closeModal}>
      <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.1,
            ease: [0, 0.71, 0.2, 1.01],
          }} className="absolute bg-whiteMain mt-20 h-[15rem] w-full top-0 bg-white rounded xl:w-1/3 xl:left-0 xl:right-0 xl:mr-auto xl:ml-auto">
          <div className="absolute flex flex-col justify-between p-8 shrink h-full w-full overflow-y-auto scrollbar-hide">
            <div className="flex justify-end hover:cursor-pointer" onClick={closeModal}>
              <GrClose className="w-5 h-5" />
            </div>
            <p className="text-center pb-4">
              Are you sure you want to delete {user.name}?
            </p>
            <div className="flex justify-center gap-32">
              <Button
                red
                rounded
                type="button"
                textColor="text-white"
                noStyle={false}
                onClick={() => {
                  onUserDelete(user);
                  closeModal();
                }}
              >
                Yes
              </Button>
              <Button
                rounded={true}
                type="button"
                textColor="text-black"
                noStyle={true}
                onClick={closeModal}
              >
                Cancel
              </Button>
            </div>
          </div>
        </motion.div>
      </Modal>
    </div>
  );
}

export default UserDelete;
