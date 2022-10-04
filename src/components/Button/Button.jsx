import css from "./Button.module.css"
import PropTypes from "prop-types"

const Button = ({ loadMore }) => {
    return (
        <button type="button" className={css.btnLoadMore} onClick={loadMore}>Load more</button>
    )
}

Button.propTypes = {
    loadMore: PropTypes.func.isRequired,
}

export default Button;