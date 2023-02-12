import Layout from "../../shared/components/Layout";
import { RootState, useFetchPostsQuery } from "../../shared/store";
import { IPost } from "../../shared/globalTypes";
import { useSelector } from "react-redux";


function Posts(){
    const userProfile = useSelector((state: RootState) => state.userProfile);
    const response = useFetchPostsQuery(userProfile.id);

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