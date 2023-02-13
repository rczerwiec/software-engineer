import GridLoader from "react-spinners/GridLoader";
import { Modal, useModal } from "../../shared/components/Modal";
import { IAlbum, IPhoto } from "../../shared/globalTypes";
import { useFetchAlbumPhotosQuery } from "../../shared/store";
import { IoIosAlbums } from "react-icons/io";

function AlbumPhotos({ id, title }: IAlbum) {
  const { isVisible, closeModal, toggleModal } = useModal();
  const response = useFetchAlbumPhotosQuery(id);

  let renderedPhotos;
  if (response.isLoading) {
    renderedPhotos = (
      <div className="flex justify-center items-center">
        <GridLoader />
      </div>
    );
  } else if (response.isError) {
    renderedPhotos = <div>Error</div>;
  } else if (response.isSuccess) {
    renderedPhotos = response.data.map((photo: IPhoto) => {
      return (
        <div key={photo.id}>
          <img src={photo.url} alt={photo.title} />
        </div>
      );
    });
  }

  return (
    <div
    onClick={() => {
        toggleModal();
      }}
      className="flex justify-between border-b p-4 items-center cursor-pointer"
    >
        
      <div
        className="flex gap-4"
      >
              <div className="flex gap-2">
        <IoIosAlbums className="w-6 h-6" />
        <div>
        <span className="text-sm">Title: {title}</span>
        </div>
      </div>
        
          
      </div>
      

      <Modal isVisible={isVisible} onClose={closeModal}>
        <div className="absolute bg-whiteMain mt-20 h-3/4 w-full top-0 bg-white rounded ">
          <div className="absolute flex flex-col justify-between p-8 shrink h-full w-full overflow-y-auto  scrollbar-hide">
            <h3 className="text-center text-md font-bold my-2">
              Album:{title}
            </h3>
            <div className="flex flex-col justify-center items-center ">
            {renderedPhotos}
            </div>

          </div>
        </div>
      </Modal>
    </div>
  );
}

export default AlbumPhotos;
