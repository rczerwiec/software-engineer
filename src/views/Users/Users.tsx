import Layout from "../../shared/components/Layout";
import Modal from "../../shared/components/Modal";
import { useFetchUsersQuery } from "../../shared/store";
import { IUser } from "../../shared/globalTypes";
import UserCard from "./UserCard";
import { useState } from "react";


function Users(){
    const response = useFetchUsersQuery('');
    const [selectedUser, setSelectedUser] = useState<IUser>();
    const [showModal, setShowModal] = useState(false);

    const onUserDelete = (user: IUser) => {
        setSelectedUser(user);
        console.log(user.name,'onUserDelete');
                //show modal here
    }

    const onUserEdit = (user: IUser) => {
        setSelectedUser(user);
        console.log(user.name,'onUserEdit');
        //show modal here
    }


    let renderedUsers;

    if(response.isLoading){
        renderedUsers = <h1>Loading...</h1>
    }
    else if(response.isError){
        renderedUsers = <h1>Error :</h1>
    }
    else if(response.isSuccess){
        renderedUsers = response.data.map((user: IUser) => {
            return (
                <UserCard user={user} key={user.id} onDelete={onUserDelete} onEdit={onUserEdit}>
                </UserCard>
            )
        })
    }
    return(
        <Layout>
            {renderedUsers}
        </Layout>
    )
}

export default Users;