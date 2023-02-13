import { Modal, useModal } from "../../shared/components/Modal";
import { useFormik } from "formik";
import { IUser } from "../../shared/globalTypes";
import { formSchema } from "./userFormSchema";
import { IoMdAddCircle } from "react-icons/io";
import { useCreateUserMutation } from "../../shared/store";
import displayToast from "../../shared/utils/displayToast";
import {useId} from "react"
import UserForm from "./UserForm";

//TODO:
// 1. Implement validation (errors etc).
//https://formik.org/docs/guides/validation

function UserCreate() {
  const { isVisible, closeModal, toggleModal } = useModal();
  const [createUser] = useCreateUserMutation();
  const id = useId();
  const formik = useFormik({
    initialValues: {
      id: parseInt(id),
      username: "",
      name: "",
      email: "",
      phone: "",
      website: "",
      address: {
        city: "",
        geo: {
          lat: "",
          lng: "",
        },
        street: "",
        suite:"",
        zipcode: "",
      },
      company: {
        bs: "",
        catchPhrase: "",
        name: "",
      },
    },
    //validationSchema: formSchema,
    onSubmit: (values) => {
      onUserCreate(values);
      closeModal();
    },
  });
  const onUserCreate = async (user: IUser) => {
    return await createUser(user.id)
      .unwrap()
      .then((res) => {
        displayToast({ type: "success", message: "Successfully created user" });
      })
      .catch((err) => {
        displayToast({ type: "error", message: "Unexpected error" });
      });
  };
  //Formularz do osobnego kompentu później
  return (
    <div>
      <div
        onClick={() => {
          toggleModal();
        }}
        className="flex items-center justify-center m-4 gap-1.5"
      >
        <IoMdAddCircle className="w-6 h-6"></IoMdAddCircle> Create new User
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

export default UserCreate;
