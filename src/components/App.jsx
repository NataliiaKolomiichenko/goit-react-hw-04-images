import { Component } from "react";
import Searchbar from "./Searchbar"
import ImageGallery from "./ImageGallery";
import Button from "./Button"
import { fetchImages } from "../services/fetchApi"
import Modal from "components/Modal";
import Loader from "./Loader";


export class App extends Component {
  state = {
    page: 1,
    query: "",
    images: [],
    showModal: false,
    bigImageUrl: null,
    loading: "",
  }

  async componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (prevState.page !== page || prevState.query !== query) {
      try {
        this.loadingChange()
      const data = await fetchImages(query, page)
      const imagesData = await data.hits;
        this.setState(state => ({
          images: [...state.images, ...imagesData]
        }))
        this.loadingChange()
        
      } catch(error) {
        console.log(error)
      }
    }
  }

  loadingChange = () => {
    this.setState(state => ({loading: !state.loading}))
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.query === event.target.elements.query.value) {
      return
    }

    this.setState({
      page: 1,
      query: event.target.elements.query.value,
      images: [],
    })
  }

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1
    }))
  }

  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal,
      bigImageUrl: null,
    }))
  }

  LargeImages = imageUrl => {
    this.toggleModal();
    this.setState({ bigImageUrl: imageUrl });
  };

  render() {
    const { query, images, bigImageUrl, loading, showModal } = this.state;
    return (
    <div>
        <Searchbar onSubmit={this.handleSubmit} />
        {query && <ImageGallery items={images} onImageClick={this.LargeImages} />}
        {loading && <Loader />}
        {images.length !== 0 && <Button loadMore={this.loadMore} />}
        {showModal && <Modal onToggle={this.toggleModal} largeImage={bigImageUrl} />}
        
    </div>
  );
  }
}
