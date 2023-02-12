import { Modal, useModal } from "../../shared/components/Modal";
import { useFormik } from "formik";
import { IUser } from "../../shared/globalTypes";
import TextInput from "../../shared/components/TextInput";
import { formSchema } from "./userFormSchema";
import { IoMdAddCircle } from "react-icons/io";

interface IProps {
  onCreate: () => void;
}
//TODO:
// 1. Implement validation (errors etc).
// 2. Export form to another component
//https://formik.org/docs/guides/validation

function UserCreate({ onCreate }: IProps) {
  const { isVisible, closeModal, toggleModal } = useModal();
  const formik = useFormik({
    initialValues: {
      username: "",
      name: "",
      email: "",
      phone: "",
      website: "",
      city: "",
      street: "",
      zipcode: "",
      suite: "",
      bs: "",
      companyName: "",
    },
    //validationSchema: formSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      onCreate();
      closeModal();
    },
  });

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
        <form onSubmit={formik.handleSubmit}>
          <div className="absolute bg-whiteMain mt-20 h-full w-1/2 left-1/4 top-0 bg-white rounded ">
            <div className="absolute flex flex-col shrink h-full w-full overflow-y-auto scrollbar-hide">
              <form onSubmit={formik.handleSubmit}>
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
                  type="text"
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
                  name="city"
                  type="text"
                  value={formik.values.city}
                  label="City"
                  onChange={formik.handleChange}
                />
                <TextInput
                  name="street"
                  type="text"
                  value={formik.values.street}
                  label="Street"
                  onChange={formik.handleChange}
                />
                <TextInput
                  name="zipcode"
                  type="text"
                  value={formik.values.zipcode}
                  label="Zipcode"
                  onChange={formik.handleChange}
                />
                <TextInput
                  name="suite"
                  type="text"
                  value={formik.values.suite}
                  label="Suite"
                  onChange={formik.handleChange}
                />
                <TextInput
                  name="bs"
                  type="text"
                  value={formik.values.bs}
                  label="Bs"
                  onChange={formik.handleChange}
                />
                <TextInput
                  name="companyName"
                  type="text"
                  value={formik.values.companyName}
                  label="CompanyName"
                  onChange={formik.handleChange}
                />
                {formik.isValid && <button type="submit">Submit</button>}
              </form>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default UserCreate;
