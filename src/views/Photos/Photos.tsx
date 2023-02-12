import Layout from "../../shared/components/Layout";
import { useFetchPhotosQuery } from "../../shared/store";
import { IPhoto } from "../../shared/globalTypes";


function Photos(){
    const response = useFetchPhotosQuery('');
    let renderedPhotos;

    if(response.isLoading){
        renderedPhotos = <h1>Loading...</h1>
    }
    else if(response.isError){
        renderedPhotos = <h1>Error :</h1>
    }
    else if(response.isSuccess){
        renderedPhotos = response.data.map((photo: IPhoto) => {
            return (
                <div key={photo.id}>
                    <img src={photo.url} alt={photo.title} />
                </div>
            )
        })
    }



    return(
        <Layout>
            {renderedPhotos}
        </Layout>
    )
}

export default Photos;