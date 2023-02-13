import TextInput from "../../shared/components/TextInput";


function UserForm({formik}:any){
    return(
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
    )
}

export default UserForm;