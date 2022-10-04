import css from "./Searchbar.module.css"
import PropTypes from "prop-types"
import { IconContext } from 'react-icons'
import {BiSearchAlt} from 'react-icons/bi'

const Searchbar = ({onSubmit}) => {
    return (
        <header className={css.searchbar}>
            <form className={css.searchForm} onSubmit={onSubmit}>
                <button type="submit" className={css.searchFormBtn}>
                    <IconContext.Provider value={{ color: "blue", size: "30px" }}>
                        <BiSearchAlt />
                    </IconContext.Provider>
                </button>

                <input className={css.searchFormInput} type="text" name="query" autoComplete="off" autoFocus placeholder="Search images and photos" />
            </form>
        </header>
    )
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}

export default Searchbar;