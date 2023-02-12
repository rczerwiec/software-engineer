import { Modal, useModal } from "../../shared/components/Modal";
import { useFormik } from "formik";
import { IUser } from "../../shared/globalTypes";
import TextInput from "../../shared/components/TextInput";

interface IProps {
  onEdit: (user: IUser) => void;
  user: IUser;
}

function UserEdit({ onEdit, user }: IProps) {
  const { isVisible, closeModal, toggleModal } = useModal();
  console.log(user.address);
  const formik = useFormik({
    initialValues: {
      username: user.username,
      name: user.name,
      email: user.email,
      phone: user.phone,
      website: user.website,
      city: user.address.city,
      street: user.address.street,
      zipcode: user.address.zipcode,
      suite: user.address.suite,
      bs: user.company.bs,
      companyName: user.company.name,
    },
    onSubmit: (values) => {
      onEdit(user);
      alert(JSON.stringify(values, null, 2));
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
      >
        Edit
      </div>
      <Modal isVisible={isVisible} onClose={closeModal}>
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
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default UserEdit;
