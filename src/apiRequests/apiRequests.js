const fetchImages = (query, page) => {
  return fetch(`https://pixabay.com/api/?q=${query}&page=${page}&key=22046149-41a2515b5a783e6a5f4bfbfcc&image_type=photo&orientation=horizontal&per_page=12
`).then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error('Something went wrong'));
  });
};

export default fetchImages;
