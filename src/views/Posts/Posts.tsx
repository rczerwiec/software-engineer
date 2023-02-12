import Layout from "../../shared/components/Layout";
import { useFetchPostsQuery } from "../../shared/store";

interface IPost{
    body: string;
    id: number;
    title: string;
    userId: number;
}

function Posts(){
    const response = useFetchPostsQuery('');
    let renderedPosts;

    if(response.isLoading){
        renderedPosts = <h1>Loading...</h1>
    }
    else if(response.isError){
        renderedPosts = <h1>Error :</h1>
    }
    else if(response.isSuccess){
        renderedPosts = response.data.map((post: IPost) => {
            return (
                <div key={post.id}>
                    <p>{post.title}</p>
                </div>
            )
        })
    }
    return(
        <Layout>
            {renderedPosts}
        </Layout>
    )
}

export default Posts;