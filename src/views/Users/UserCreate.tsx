import UserForm from "./Form/UserForm";
import { useFormik } from "formik";
import { IUser } from "../../shared/globalTypes";
import { formSchema } from "./Form/userFormSchema";
import { IoMdAddCircle } from "react-icons/io";
import { GrClose } from "react-icons/gr";
import { useCreateUserMutation } from "../../shared/store";
import { Modal, useModal } from "../../shared/components/Modal";
import displayToast from "../../shared/utils/displayToast";
import { useId } from "react";
import { motion } from "framer-motion";

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
        suite: "",
        zipcode: "",
      },
      company: {
        bs: "",
        catchPhrase: "",
        name: "",
      },
    },
    validationSchema: formSchema,
    onSubmit: (values, { resetForm }) => {
      onUserCreate(values);
      closeModal();
      resetForm();
    },
  });
  const onUserCreate = async (user: IUser) => {
    return await createUser(user.id)
      .unwrap()
      .then((res) => {
        console.log("res from api:", res);
        displayToast({ type: "success", message: "Successfully created user" });
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
        className="flex items-center justify-center m-4 gap-1.5 hover:cursor-pointer"
      >
        <IoMdAddCircle className="w-6 h-6"></IoMdAddCircle>{" "}
        <span>Create new User</span>
      </div>
      <Modal isVisible={isVisible} onClose={closeModal}>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.1,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="absolute bg-whiteMain mt-20 h-5/6 w-full top-0 bg-white rounded xl:w-1/3 xl:left-0 xl:right-0 xl:mr-auto xl:ml-auto"

        >
          <div className="absolute flex flex-col shrink h-full w-full scrollbar-hide p-6">
            <div className="flex justify-end" onClick={closeModal}>
              <GrClose className="w-5 h-5 hover:cursor-pointer" />
            </div>
            <h3 className="text-center text-md font-bold my-2">
              Create New User
            </h3>
            <UserForm formik={formik} />
          </div>
        </motion.div>
      </Modal>
    </div>
  );
}

export default UserCreate;
