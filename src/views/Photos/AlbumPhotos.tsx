import Spinner from "../../shared/components/Spinner";
import { Modal, useModal } from "../../shared/components/Modal";
import { useFetchAlbumPhotosQuery } from "../../shared/store";
import { IAlbum, IPhoto } from "../../shared/globalTypes";
import { IoIosAlbums } from "react-icons/io";
import { GrClose } from "react-icons/gr";
import { motion } from "framer-motion";

function AlbumPhotos({ id, title }: IAlbum) {
  const { isVisible, closeModal, toggleModal } = useModal();
  const response = useFetchAlbumPhotosQuery(id);

  let renderedPhotos;
  if (response.isLoading) {
    renderedPhotos = (
      <Spinner/>
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
    <motion.div  initial={{ opacity: 0 }}
    whileInView={{ opacity: 1}}
    transition={{duration:0.8}}
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
        <div className="absolute bg-whiteMain mt-20 h-3/4 w-full top-0 bg-white rounded xl:w-1/3 xl:left-0 xl:right-0 xl:mr-auto xl:ml-auto">
          <div className="absolute flex flex-col justify-between p-8 shrink h-full w-full overflow-y-auto  scrollbar-hide">
            <div className="flex justify-end" onClick={closeModal}><GrClose className="w-5 h-5"/></div>
            <h3 className="text-center text-md font-bold my-2">
              Album:{title}
            </h3>
            <div className="flex flex-col justify-center items-center ">
            {renderedPhotos}
            </div>

          </div>
        </div>
      </Modal>
    </motion.div>
  );
}

export default AlbumPhotos;
