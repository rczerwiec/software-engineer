import * as Yup from "yup";

export const formSchema = Yup.object().shape({
    username: Yup.string().min(2, "Username must be at least 2 characters").max(50, "Username must be less than 50 characters").required("Username is required"),
    name: Yup.string().min(2, "Name must be at least 2 characters").max(50, "Name must be less than 50 characters").required("Name is required"),
    email: Yup.string().email('Invalid email address').required("Email is required"),
    phone: Yup.string().min(6, "Phone number must be at least 6 numbers").required("Phone number is required"),
    website: Yup.string().min(2, "Website must be at least 2 numbers"),
    city: Yup.string().min(2, "City must be at least 2 characters").max(50, "City must be less than 50 characters"), 
    street: Yup.string().min(2, "Street must be at least 2 characters").max(50, "Street must be less than 50 characters"), 
    zipcode: Yup.string().min(2, "Zipcode must be at least 2 characters").max(50, "Zipcode must be less than 50 characters"), 
    suite: Yup.string().min(2, "Suite must be at least 2 characters").max(50, "Suite must be less than 50 characters"), 
    bs: Yup.string().min(2, "Bs must be at least 2 characters").max(50, "Bs must be less than 50 characters"), 
    companyName: Yup.string().min(2, "Company Name must be at least 2 characters").max(50, "Company Name must be less than 50 characters"),
});