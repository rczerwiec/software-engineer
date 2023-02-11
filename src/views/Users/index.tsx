import Layout from "../../shared/components/Layout";
import { useFetchUsersQuery } from "../../shared/store";

function Users(){
    const data = useFetchUsersQuery('');
    console.log(data);
    return(
        <Layout>
            Users
        </Layout>
    )
}

export default Users;