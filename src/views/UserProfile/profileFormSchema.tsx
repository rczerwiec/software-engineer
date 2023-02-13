import * as Yup from "yup";

export const profileFormSchema = Yup.object().shape({
    username: Yup.string().min(2, "Username must be at least 2 characters").max(50, "Username must be less than 50 characters").required("Username is required"),
    name: Yup.string().min(2, "Name must be at least 2 characters").max(50, "Name must be less than 50 characters").required("Name is required"),
    email: Yup.string().email('Invalid email address').required("Email is required"),
});