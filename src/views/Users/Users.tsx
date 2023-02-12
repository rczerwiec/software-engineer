import Layout from "../../shared/components/Layout";
import Modal from "../../shared/components/Modal";
import { useFetchUsersQuery } from "../../shared/store";

interface IUser{
    addres: {
        city: string,
        geo: {
            lat: string,
            lng: string,
        }
        street: string,
        suite: string,
        zipcode: string,
    }
    company: {
        bs: string,
        catchPhrase: string,
        name: string,
    }
    email: string,
    id: number,
    name: string,
    phone: string,
    username: string,
    website: string,
}

function Users(){
    const response = useFetchUsersQuery('');
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
                <div key={user.id}>
                    <h1>{user.name}</h1>
                </div>
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