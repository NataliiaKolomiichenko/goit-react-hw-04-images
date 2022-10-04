import css from "./ImageGallery.module.css"
import ImageGalleryItem from "../ImageGalleryItem"
import PropTypes from 'prop-types'

const ImageGallery = ({items, onImageClick}) => {
    return (
        <ul className={css.imageGallery}>
            {items.map(item => <ImageGalleryItem item={item} key={item.id} onImageClick={onImageClick} />)
            }
        </ul>
    )
}

ImageGallery.propTypes = {
    onImageClick: PropTypes.func.isRequired,
    items: PropTypes.arrayOf(
        PropTypes.shape({ id: PropTypes.number.isRequired })
    ),
}

export default ImageGallery;