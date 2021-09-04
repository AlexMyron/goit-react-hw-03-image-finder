import PropTypes from 'prop-types';
import LoadBtnStyles from './LoadMoreBtn.styled';

const LoadMoreBtn = ({ handleClick }) => {
  return (
    <LoadBtnStyles type="button" onClick={handleClick}>
      Load more
    </LoadBtnStyles>
  );
};

LoadMoreBtn.propTypes = { handleClick: PropTypes.func.isRequired };

export default LoadMoreBtn;
