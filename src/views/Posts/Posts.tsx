import Layout from "../../shared/components/Layout";
import { RootState, useFetchPostsQuery } from "../../shared/store";
import { IPost } from "../../shared/globalTypes";
import { useSelector } from "react-redux";
import Spinner from "../../shared/components/Spinner";
import { motion } from "framer-motion";

function Posts() {
  const userProfile = useSelector((state: RootState) => state.userProfile);
  const response = useFetchPostsQuery(userProfile.id);

  let renderedPosts;
  if (response.isLoading) {
    renderedPosts = <Spinner />;
  } else if (response.isError) {
    renderedPosts = <h1>Error :</h1>;
  } else if (response.isSuccess) {
    renderedPosts = response.data.map((post: IPost) => {
      return (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          key={post.id}
          className="flex justify-between border-b p-4 items-center"
        >
          <div>
            <label className="font-bold">{post.title}</label>
            <p className="text-sm">{post.body}</p>
          </div>
        </motion.div>
      );
    });
  }
  return (
    <Layout>
      <h3 className="text-xl font-bold my-2">{userProfile.name} Posts</h3>
      <div className="h-3/4 overflow-scroll border border-primary-gray rounded-lg">
        {renderedPosts}
      </div>
    </Layout>
  );
}

export default Posts;
