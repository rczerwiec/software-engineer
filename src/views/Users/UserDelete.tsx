import { Modal, useModal } from "../../shared/components/Modal";
import { IUser } from "../../shared/globalTypes";

interface IProps {
  onDelete: (user: IUser) => void;
  user: IUser;
}

function UserDelete({ onDelete, user }: IProps) {
  const { isVisible, closeModal, toggleModal } = useModal();

  return (
    <div>
      <div
        onClick={() => {
          toggleModal();
        }}
      >
        Delete
      </div>
      <Modal isVisible={isVisible} onClose={closeModal}>
        <div className="absolute bg-whiteMain mt-20 h-full w-1/2 left-1/4 top-0 bg-white rounded ">
          <div className="absolute flex flex-col shrink h-full w-full overflow-y-auto scrollbar-hide">
            <p>Are you sure you want to delete this user?</p>
            <button
              type="button"
              onClick={() => {
                onDelete(user);
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
