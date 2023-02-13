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
import displayToast from "../../shared/utils/displayToast";
import Button from "../../shared/components/Buttons/Button";

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
      id: userProfile.id,
      username: userProfile.username,
      name: userProfile.name,
      email: userProfile.email,
    },
    //validationSchema: profileFormSchema,
    onSubmit: (values) => {
      dispatch(edit(values));
      displayToast({ type: "success", message: "Successfully edited user" });//change
    },
  });

  useEffect(() => {
    if(userProfile){
        formik.setFieldValue("username", userProfile.username);
        formik.setFieldValue("name", userProfile.name);
        formik.setFieldValue("email", userProfile.email);
    }
  },[userProfile]);

  return (
    <Layout>
      <form onSubmit={formik.handleSubmit} >
        <div className="flex flex-col gap-4 justify-center">
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
        </div>
        <div className="flex justify-end m-4">
                  <Button green type="submit" textColor="text-white" noStyle={false} rounded>
                    Confirm
                  </Button>
        </div>
        
      </form>
      <div>
         <label>Log in to another user</label>
         <Selector placeholder={placeholderText} onChange={(option : IOption) => {console.log(option.value)
            dispatch(change(option.value))}} options={options}/>
      </div>
      
      
    </Layout>
  );
}

export default UserProfile;
