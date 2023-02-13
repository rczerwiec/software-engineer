import TextInput from "../../../shared/components/TextInput";
import Error from "../../../shared/components/Formik/Error";
import Button from "../../../shared/components/Buttons/Button";


function UserForm({formik}:any){
    
    return(
        <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col gap-2 overflow-y-auto"
            > 
              <TextInput
                name="username"
                type="text"
                value={formik.values.username}
                label="Username"
                onChange={formik.handleChange}
              />
              <Error text={formik.errors.username}/>
              <TextInput
                name="name"
                type="text"
                value={formik.values.name}
                label="Name"
                onChange={formik.handleChange}
              />
              <Error text={formik.errors.name}/>
              <TextInput
                name="email"
                type="email"
                value={formik.values.email}
                label="Email"
                onChange={formik.handleChange}
              />
              <Error text={formik.errors.email}/>
              <TextInput
                name="phone"
                type="text"
                value={formik.values.phone}
                label="Phone"
                onChange={formik.handleChange}
              />
              <Error text={formik.errors.phone}/>
              <TextInput
                name="website"
                type="text"
                value={formik.values.website}
                label="Website"
                onChange={formik.handleChange}
              />
              <Error text={formik.errors.website}/>
              <TextInput
                name="address.city"
                type="text"
                value={formik.values.address.city}
                label="City"
                onChange={formik.handleChange}
              />
              <Error text={formik.errors.city}/>
              <TextInput
                name="address.street"
                type="text"
                value={formik.values.address.street}
                label="Street"
                onChange={formik.handleChange}
              />
              <Error text={formik.errors.street}/>
              <TextInput
                name="address.zipcode"
                type="text"
                value={formik.values.address.zipcode}
                label="Zipcode"
                onChange={formik.handleChange}
              />
              <Error text={formik.errors.zipcode}/>
              <TextInput
                name="address.suite"
                type="text"
                value={formik.values.address.suite}
                label="Suite"
                onChange={formik.handleChange}
              />
              <Error text={formik.errors.suite}/>
              {formik.isValid && (
                <div className="flex justify-center m-4">
                  <Button green type="submit" textColor="text-white" noStyle={false} rounded>
                    Confirm
                  </Button>
                </div>
              )}
            </form>
    )
}

export default UserForm;