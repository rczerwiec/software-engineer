import Layout from "../../shared/components/Layout";
import UserCreate from "./UserCreate";
import SearchBar from "../../shared/components/SearchBar";
import Spinner from "../../shared/components/Spinner";
import UserCard from "./UserCard";
import { useState } from "react";
import { IUser } from "../../shared/globalTypes";
import { useFetchUsersQuery } from "../../shared/store";


function Users() {
  const [searchBarValue, setSearchBarValue] = useState("");
  const response = useFetchUsersQuery("");

  let renderedUsers;

  if (response.isLoading) {
    renderedUsers = <Spinner />;
  } else if (response.isError) {
    renderedUsers = <h1>Error :</h1>;
  } else if (response.isSuccess) {
    const renderedValue = response.data.filter((o: IUser) => {
      if (
        o.name.toLowerCase().includes(searchBarValue.toLowerCase()) ||
        o.username.toLowerCase().includes(searchBarValue.toLowerCase()) ||
        o.email.toLowerCase().includes(searchBarValue.toLowerCase())
      )
        return o;
    });
    renderedUsers = renderedValue.map((user: IUser) => {
      return <UserCard user={user} key={user.id} />;
    });
  }

  const onSearchBarValueChangedHandler = (value: string) => {
    setSearchBarValue(value);
  };

  return (
    <>
      <Layout>
        <SearchBar
          searchBarValue={searchBarValue}
          onChange={onSearchBarValueChangedHandler}
        />

        <UserCreate />
        <div className="h-3/4 overflow-scroll overflow-x-hidden border border-primary-gray rounded-lg">
          {renderedUsers}
        </div>
      </Layout>
    </>
  );
}

export default Users;
