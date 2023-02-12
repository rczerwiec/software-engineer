import { Modal, useModal } from "../../shared/components/Modal";
import { IUser } from "../../shared/globalTypes";

interface IProps {
  onDelete: (user: IUser) => void;
  user: IUser;
}

function UserDelete({ onDelete, user }: IProps) {
  const { isVisible, closeModal, toggleModal } = useModal();

  return (
    <div
      onClick={() => {
        toggleModal();
      }}
    >
      Delete
      <Modal isVisible={isVisible} onClose={closeModal}>
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
      </Modal>
    </div>
  );
}

export default UserDelete;
