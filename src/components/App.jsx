import { useState, useEffect } from "react";
import Searchbar from "./Searchbar"
import ImageGallery from "./ImageGallery";
import Button from "./Button"
import { fetchImages } from "../services/fetchApi"
import Modal from "components/Modal";
import Loader from "./Loader";

export const App = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [bigImageUrl, setBigImageUrl] = useState(null);
  const [loading, setLoading] = useState('');

  useEffect( () => {
    if (query === '') {
      return;
    }
    async function fetchData() {
      try {
        loadingChange();
        const data = await fetchImages(query, page);
        const imagesData = await data.hits;
        setImages(prevState => [...prevState, ...imagesData]);
        loadingChange();
      } catch(error) {
          console.log(error)
      }
    }
    fetchData()
  },[query, page])

  const loadingChange = () => {
    setLoading(prevState => !prevState)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (query === event.target.elements.query.value) {
      return;
    }

    setPage(1);
    setQuery(event.target.elements.query.value);
    setImages([]);
  }

  const loadMore = () => {
    setPage(prevState => prevState + 1);
  }

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
    setBigImageUrl(null);
  }

  const largeImages = imageUrl => {
    toggleModal();
    setBigImageUrl(imageUrl);
  };

  return (
    <div>
        <Searchbar onSubmit={handleSubmit} />
        {query && <ImageGallery items={images} onImageClick={largeImages} />}
        {loading && <Loader />}
        {images.length !== 0 && <Button loadMore={loadMore} />}
        {showModal && <Modal onToggle={toggleModal} largeImage={bigImageUrl} />}
    </div>
  );
}
