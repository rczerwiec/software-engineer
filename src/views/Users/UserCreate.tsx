import { Modal, useModal } from "../../shared/components/Modal";
import { useFormik } from "formik";
import { IUser } from "../../shared/globalTypes";
import TextInput from "../../shared/components/TextInput";
import { formSchema } from "./userFormSchema";
import { IoMdAddCircle } from "react-icons/io";
import { useCreateUserMutation } from "../../shared/store";
import displayToast from "../../shared/utils/displayToast";
import {useId} from "react"

//TODO:
// 1. Implement validation (errors etc).
// 2. Export form and modals to another components
//https://formik.org/docs/guides/validation

function UserCreate() {
  const { isVisible, closeModal, toggleModal } = useModal();
  const [createUser, results] = useCreateUserMutation();
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
      alert(JSON.stringify(values, null, 2));
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
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col gap-2"
            >
              <TextInput
                name="username"
                type="text"
                value={formik.values.username}
                label="Username"
                onChange={formik.handleChange}
              />
              <TextInput
                name="name"
                type="text"
                value={formik.values.name}
                label="Name"
                onChange={formik.handleChange}
              />
              <TextInput
                name="email"
                type="email"
                value={formik.values.email}
                label="Email"
                onChange={formik.handleChange}
              />
              <TextInput
                name="phone"
                type="text"
                value={formik.values.phone}
                label="Phone"
                onChange={formik.handleChange}
              />
              <TextInput
                name="website"
                type="text"
                value={formik.values.website}
                label="Website"
                onChange={formik.handleChange}
              />
              <TextInput
                name="address.city"
                type="text"
                value={formik.values.address.city}
                label="City"
                onChange={formik.handleChange}
              />
              <TextInput
                name="address.street"
                type="text"
                value={formik.values.address.street}
                label="Street"
                onChange={formik.handleChange}
              />
              <TextInput
                name="address.zipcode"
                type="text"
                value={formik.values.address.zipcode}
                label="Zipcode"
                onChange={formik.handleChange}
              />
              <TextInput
                name="address.suite"
                type="text"
                value={formik.values.address.suite}
                label="Suite"
                onChange={formik.handleChange}
              />
              {formik.isValid && (
                <div className="flex justify-center m-4">
                  <button
                    className="p-4 bg-green-400 text-white rounded"
                    type="submit"
                  >
                    Confirm
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default UserCreate;
