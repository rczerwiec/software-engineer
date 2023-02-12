import Layout from "../../shared/components/Layout";
import { useDeleteUserMutation, useFetchUsersQuery } from "../../shared/store";
import { IUser } from "../../shared/globalTypes";
import UserCard from "./UserCard";
import { useState } from "react";
import UserCreate from "./UserCreate";
import SearchBar from "../../shared/components/SearchBar";


function Users() {
  const [searchBarValue, setSearchBarValue] = useState("");
  const response = useFetchUsersQuery("");

  let renderedUsers;

  if (response.isLoading) {
    renderedUsers = <h1>Loading...</h1>;
  } else if (response.isError) {
    renderedUsers = <h1>Error :</h1>;
  } else if (response.isSuccess) {
    renderedUsers = response.data.map((user: IUser) => {
      return (
        <UserCard
          user={user}
          key={user.id}
        />
      );
    });
  }
  return (
    <>
      <Layout>
        <SearchBar
          searchBarValue={searchBarValue}
          onChange={() => {
            console.log("search");
          }}
        />

        <UserCreate/>
        <div className="h-3/4 overflow-scroll border border-primary-gray rounded-lg">
          {renderedUsers}
        </div>
      </Layout>
    </>
  );
}

export default Users;
