import { Modal, useModal } from "../../shared/components/Modal";
import { IUser } from "../../shared/globalTypes";
import {IoMdTrash} from "react-icons/io"
import { useDeleteUserMutation } from "../../shared/store";
import displayToast from "../../shared/utils/displayToast";


interface IProps {
  user: IUser;
}

function UserDelete({ user }: IProps) {
  const { isVisible, closeModal, toggleModal } = useModal();
  const [deleteUser, result] = useDeleteUserMutation();

  const onUserDelete = async (user: IUser) => {
    
    return await deleteUser(user.id).unwrap().then((res) => {
        displayToast({type: "success", message: "Successfully deleted user"});
    }).catch((err) => {
        displayToast({type: "error", message: "Unexpected error"});
    });

    
    
  };

  return (
    <div>
      <div
        onClick={() => {
          toggleModal();
        }}
      >
        <IoMdTrash className="w-6 h-6 text-gray-400"/>
      </div>
      <Modal isVisible={isVisible} onClose={closeModal}>
        <div className="absolute bg-whiteMain mt-20 h-full w-1/2 left-1/4 top-0 bg-white rounded ">
          <div className="absolute flex flex-col shrink h-full w-full overflow-y-auto scrollbar-hide">
            <p>Are you sure you want to delete this user?</p>
            <button
              type="button"
              onClick={() => {
                onUserDelete(user)
                closeModal();
              }}
            >
              Yes
            </button>
            <button type="button" onClick={closeModal}>
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default UserDelete;
