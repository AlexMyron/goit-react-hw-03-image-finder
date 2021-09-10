import React, { Component } from 'react';
import { useEffect, useState } from 'react';
import Loader from 'react-loader-spinner';
import './App.css';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import LoadMoreBtn from './components/LoadMoreBtn';
import { AppWrapper, ModalBtn } from './App.styled';
import Modal from './components/Modal';
import fetchImages from './apiRequests/apiRequests';

const App = () => {
  const [searchInput, setSearchInput] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [apiResult, setApiResult] = useState([]);
  const [error, setError] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [loader, setLoader] = useState(false);
  // const [currentImageId, setCurrentImageId] = useState('');
  const [currentImageURL, setCurrentImageURL] = useState('');

  useEffect(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  });

  const getImageUrl = imageId => {
    const targetImage = apiResult.find(image => {
      return image.id === imageId;
    });

    setCurrentImageURL(targetImage.largeImageURL);
    return targetImage.largeImageURL;
  };

  const showModal = e => {
    if (e.target.nodeName !== 'IMG') return;
    const imageId = Number(e.target.dataset.id);

    getImageUrl(imageId);
    setOpenModal(true);
  };

  const fetchRequest = (query, page) => {
    setLoader(true);

    fetchImages(query, page)
      .then(data => setApiResult(state => [...state, ...data.hits]))
      .catch(error => setError(error))
      .finally(() => setLoader(false));
  };

  const handleSearchinput = searchInput => {
    setSearchInput(searchInput);

    setCurrentPage(1);
    setApiResult([]);
    fetchRequest(searchInput, currentPage);
  };

  const handleLoadMore = e => {
    // const { searchInput, currentPage } = this.state;
    // this.setState({ currentPage: currentPage + 1 });
    setCurrentPage(state => state + 1);

    fetchRequest(searchInput, currentPage + 1);
  };

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  const closeModal = e => {
    if (e.target.nodeName === 'IMG') return;
    toggleModal();
  };

  const isApiResult = apiResult.length > 0;

  return (
    <AppWrapper className="App">
      <Searchbar sendInputValue={handleSearchinput} />
      <ImageGallery queryResult={apiResult} getImage={showModal} />
      {loader && (
        <Loader
          className="loaderIcon"
          type="ThreeDots"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={300000}
        />
      )}
      {openModal && (
        <Modal handleOverlayClick={closeModal} handleKeycode={toggleModal}>
          <ModalBtn type="button">Close</ModalBtn>
          <img src={currentImageURL} alt="" key="null" />
        </Modal>
      )}
      {error && <p>Woops... {error.message}</p>}
      {isApiResult && <LoadMoreBtn handleClick={handleLoadMore} />}
    </AppWrapper>
  );
};
class classedApp extends Component {
  state = {
    searchInput: '',
    currentPage: 1,
    apiResult: [],
    error: '',
    openModal: false,
    loader: false,
    currentImageId: '',
    currentImageURL: '',
  };

  componentDidUpdate(prevState, prevProps) {
    if (this.state !== prevProps) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  showModal = e => {
    if (e.target.nodeName !== 'IMG') return;
    const imageId = Number(e.target.dataset.id);

    this.getImageUrl(imageId);
    this.setState({ openModal: true });
  };

  getImageUrl = imageId => {
    const targetImage = this.state.apiResult.find(image => {
      return image.id === imageId;
    });

    this.setState({ currentImageURL: targetImage.largeImageURL });
    return targetImage.largeImageURL;
  };

  handleSearchinput = searchInput => {
    this.setState({ searchInput });

    const { currentPage } = this.state;

    this.setState({ currentPage: 1, apiResult: [] });
    this.fetchRequest(searchInput, currentPage);
  };

  fetchRequest(query, page) {
    this.setState({ loader: true });

    fetchImages(query, page)
      .then(data =>
        this.setState(prevState => {
          const newValue = [...prevState.apiResult, ...data.hits];
          return { apiResult: newValue };
        }),
      )
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loader: false }));
  }

  handleLoadMore = e => {
    const { searchInput, currentPage } = this.state;
    this.setState({ currentPage: currentPage + 1 });

    this.fetchRequest(searchInput, currentPage + 1);
  };

  toggleModal = () => {
    this.setState(({ openModal }) => ({ openModal: !openModal }));
  };

  closeModal = e => {
    if (e.target.nodeName === 'IMG') return;
    this.toggleModal();
  };

  render() {
    const { openModal, apiResult, loader, currentImageURL, error } = this.state;
    const isApiResult = this.state.apiResult.length > 0;

    return (
      <AppWrapper className="App">
        <Searchbar sendInputValue={this.handleSearchinput} />
        <ImageGallery queryResult={apiResult} getImage={this.showModal} />
        {loader && (
          <Loader
            className="loaderIcon"
            type="ThreeDots"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={300000}
          />
        )}
        {openModal && (
          <Modal handleOverlayClick={this.closeModal} handleKeycode={this.toggleModal}>
            <ModalBtn type="button">Close</ModalBtn>
            <img src={currentImageURL} alt="" key="null" />
          </Modal>
        )}
        {error && <p>Woops... {error.message}</p>}
        {isApiResult && <LoadMoreBtn handleClick={this.handleLoadMore} />}
      </AppWrapper>
    );
  }
}

export default App;
