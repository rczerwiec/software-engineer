import Layout from "../../shared/components/Layout";
import { RootState, useFetchAlbumsQuery } from "../../shared/store";
import { IAlbum, IPhoto } from "../../shared/globalTypes";
import { useSelector } from "react-redux";
import AlbumPhotos from "./AlbumPhotos";
import Spinner from "../../shared/components/Spinner";



function Photos(){
    const userProfile = useSelector((state: RootState) => state.userProfile);
    const response = useFetchAlbumsQuery(userProfile.id);

    let renderedAlbums;

    if(response.isLoading){
        renderedAlbums = <Spinner/>
    }
    else if(response.isError){
        renderedAlbums = <h1>Error</h1>
    }
    else if(response.isSuccess){
        renderedAlbums = response.data.map((album: IAlbum) => {
            return (
                    <AlbumPhotos key={album.id} id={album.id} title={album.title} />
            )
        })
    }



    return(
        <Layout>
        <h3 className="text-xl font-bold my-2">{userProfile.name} Albums</h3>
        <div className="h-3/4 overflow-scroll border border-primary-gray rounded-lg">
                    {renderedAlbums}
        </div>
        </Layout>
    )
}

export default Photos;