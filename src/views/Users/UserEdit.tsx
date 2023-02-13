import UserForm from "./Form/UserForm";
import { IUser } from "../../shared/globalTypes";
import { formSchema } from "./Form/userFormSchema";
import { MdEdit } from "react-icons/md";
import displayToast from "../../shared/utils/displayToast";
import { Modal, useModal } from "../../shared/components/Modal";
import { useEditUserMutation } from "../../shared/store";
import { useFormik } from "formik";
import { GrClose } from "react-icons/gr";
import { motion } from "framer-motion";

interface IProps {
  user: IUser;
}

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
    validationSchema: formSchema,
    onSubmit: (values, { resetForm }) => {
      onUserEdit(values);
      closeModal();
      resetForm();
    },
  });

  const onUserEdit = async (user: IUser) => {
    return await editUser(user)
      .unwrap()
      .then((res) => {
        console.log("res from api:", res);
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
        <MdEdit className="w-6 h-6 text-gray-400 hover:cursor-pointer" />
      </div>
      <Modal isVisible={isVisible} onClose={closeModal}>
      <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.1,
            ease: [0, 0.71, 0.2, 1.01],
          }} className="absolute bg-whiteMain mt-20 h-5/6 w-full top-0 bg-white rounded xl:w-1/3 xl:left-0 xl:right-0 xl:mr-auto xl:ml-auto">
          <div className="absolute flex flex-col shrink h-full w-full overflow-y-auto scrollbar-hide p-6 ">
          <div className="flex justify-end" onClick={closeModal}><GrClose className="w-5 h-5 hover:cursor-pointer"/></div>
            <h3 className="text-center text-md font-bold my-2">
              <span>Edit User</span>
            </h3>
            <UserForm formik={formik} />
          </div>
        </motion.div>
      </Modal>
    </div>
  );
}

export default UserEdit;
