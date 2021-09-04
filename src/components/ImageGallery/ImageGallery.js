import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem';
import GalleryStyles from './ImageGallery.styled';

const ImageGallery = ({ queryResult, getImage }) => {
  return (
    <GalleryStyles onClick={getImage}>
      <ImageGalleryItem queryResult={queryResult} />
    </GalleryStyles>
  );
};

ImageGallery.propTypes = {
  queryResult: PropTypes.array.isRequired,
  getImage: PropTypes.func.isRequired,
};

export default ImageGallery;
