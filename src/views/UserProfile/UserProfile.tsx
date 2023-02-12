import Layout from "../../shared/components/Layout";
import { RootState, useFetchUsersQuery } from "../../shared/store/";
import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";
import TextInput from "../../shared/components/TextInput";
import { profileFormSchema } from "./profileFormSchema";
import { IUser } from "../../shared/globalTypes";
import Selector from "../../shared/components/Selector";
import { edit, change } from "../../shared/store/slices/userProfileSlice";
import {useEffect} from "react";

interface IOption{
    label: string;
    value: IUser;
}

function UserProfile() {
  const userProfile = useSelector((state: RootState) => state.userProfile);



  const response = useFetchUsersQuery("");
  const dispatch = useDispatch();

  let placeholderText;
  let options;
  if(response.isLoading) {
    placeholderText = "Loading...";
  } else  if(response.isError) {
    placeholderText = "Error while fetching users";
  }
  else{
    options = response.data.map((d : IUser) =>({
        "value": d,
        "label": d.name
    }))
    placeholderText = "Select a user";
  }
  

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

  useEffect(() => {
    if(userProfile){
        formik.setFieldValue("username", userProfile.username);
        formik.setFieldValue("name", userProfile.name);
        formik.setFieldValue("email", userProfile.email);
    }
  },[userProfile]);

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
      <div>
         <Selector placeholder={placeholderText} onChange={(option : IOption) => {console.log(option.value)
            dispatch(change(option.value))}} options={options}/>
      </div>
      
      
    </Layout>
  );
}

export default UserProfile;
