import LoadBtnStyles from './LoadMoreBtn.styled';

const LoadMoreBtn = ({ handleClick }) => {
  return (
    <LoadBtnStyles type="button" onClick={handleClick}>
      Load more
    </LoadBtnStyles>
  );
};
export default LoadMoreBtn;
