import Layout from "../../shared/components/Layout";
import type { RootState } from "../../shared/store/";
import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";
import TextInput from "../../shared/components/TextInput";
import { profileFormSchema } from "./profileFormSchema";

function UserProfile() {
  const userProfile = useSelector((state: RootState) => state.userProfile);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      username: userProfile.username,
      name: userProfile.name,
      email: userProfile.email,
    },
    //validationSchema: profileFormSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  console.log(userProfile);
  return (
    <Layout>
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
        <button type="submit">Submit</button>
      </form>
    </Layout>
  );
}

export default UserProfile;
