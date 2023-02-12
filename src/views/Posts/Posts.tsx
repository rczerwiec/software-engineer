import Layout from "../../shared/components/Layout";
import { useFetchPostsQuery } from "../../shared/store";

function Posts(){
    const response = useFetchPostsQuery('');
    console.log(response);
    return(
        <Layout>
            Posts
        </Layout>
    )
}

export default Posts;