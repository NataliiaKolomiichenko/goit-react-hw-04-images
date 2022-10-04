import css from "./ImageGalleryItem.module.css";
import PropTypes from 'prop-types'

const ImageGalleryItem = ({ item, onImageClick }) => {
    return (
        <li className={css.imageGalleryItem} onClick={() => onImageClick(item.largeImageURL)}>
            <img src={item.webformatURL} alt={item.tags} className={css.imageGalleryItemImage} />
        </li>
    )
}

ImageGalleryItem.propTypes = {
    onImageClick: PropTypes.func.isRequired,
    item: PropTypes.shape({
        largeImageURL: PropTypes.string.isRequired,
        webformatURL: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
    })
}

export default ImageGalleryItem;