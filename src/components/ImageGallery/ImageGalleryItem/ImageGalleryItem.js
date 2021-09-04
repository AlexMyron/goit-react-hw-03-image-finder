import PropTypes from 'prop-types';
import { GalleryItemStyles, GalleryItemImg } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ queryResult }) => {
  return (
    <>
      {queryResult.map(image => {
        return (
          <GalleryItemStyles key={image.id}>
            <GalleryItemImg src={image.webformatURL} alt={image.tags} data-id={image.id} />
          </GalleryItemStyles>
        );
      })}
    </>
  );
};

ImageGalleryItem.propTypes = {
  queryResult: PropTypes.array.isRequired,
};

export default ImageGalleryItem;
