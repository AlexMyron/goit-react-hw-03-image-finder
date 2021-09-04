import ImageGalleryItem from './ImageGalleryItem';
import GalleryStyles from './ImageGallery.styled';

const ImageGallery = ({ queryResult, getImage }) => {
  return (
    <GalleryStyles onClick={getImage}>
      <ImageGalleryItem queryResult={queryResult} />
    </GalleryStyles>
  );
};

export default ImageGallery;
