import { Modal, useModal } from "../../shared/components/Modal";
import { useFormik } from "formik";
import { IUser } from "../../shared/globalTypes";
import { formSchema } from "./userFormSchema";
import { MdEdit } from "react-icons/md";
import displayToast from "../../shared/utils/displayToast";
import { useEditUserMutation } from "../../shared/store";
import UserForm from "./UserForm";

interface IProps {
  user: IUser;
}
//TODO:
// 1. Implement validation (errors etc).
//https://formik.org/docs/guides/validation

function UserEdit({ user }: IProps) {
  const { isVisible, closeModal, toggleModal } = useModal();
  const [editUser] = useEditUserMutation();

  const formik = useFormik({
    initialValues: {
      id: user.id,
      username: user.username,
      name: user.name,
      email: user.email,
      phone: user.phone,
      website: user.website,
      address: {
        city: user.address.city,
        geo: {
          lat: user.address.geo.lat,
          lng: user.address.geo.lng,
        },
        street: user.address.street,
        suite: user.address.suite,
        zipcode: user.address.zipcode,
      },
      company: {
        bs: user.company.bs,
        catchPhrase: user.company.catchPhrase,
        name: user.company.name,
      },
    },
    //validationSchema: formSchema,
    onSubmit: (values) => {
      onUserEdit(values);
      closeModal();
    },
  });

  const onUserEdit = async (user: IUser) => {
    return await editUser(user)
      .unwrap()
      .then((res) => {
        displayToast({ type: "success", message: "Successfully edited user" });
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
        <MdEdit className="w-6 h-6 text-gray-400" />
      </div>
      <Modal isVisible={isVisible} onClose={closeModal}>
        <div className="absolute bg-whiteMain mt-20 h-3/4 w-full top-0 bg-white rounded">
          <div className="absolute flex flex-col shrink h-full w-full overflow-y-auto scrollbar-hide p-6">
            <h3 className="text-center text-md font-bold my-2">
              <span>Edit User</span>
            </h3>
            <UserForm formik={formik}/>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default UserEdit;
