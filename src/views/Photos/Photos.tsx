import Layout from "../../shared/components/Layout";
import { useFetchPhotosQuery } from "../../shared/store";

function Photos(){
    const response = useFetchPhotosQuery('');
    console.log(response);
    return(
        <Layout>
            Photos
        </Layout>
    )
}

export default Photos;