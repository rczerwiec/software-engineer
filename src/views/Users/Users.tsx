import Layout from "../../shared/components/Layout";
import { useFetchUsersQuery } from "../../shared/store";

function Users(){
    const response = useFetchUsersQuery('');
    console.log(response);
    return(
        <Layout>
            Users
        </Layout>
    )
}

export default Users;