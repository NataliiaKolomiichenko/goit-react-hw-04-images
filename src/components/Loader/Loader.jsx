import css from './Loader.module.css'


const Loader = () => {
    return(
        <div className={css.spinnerContainer}>
            <div className={css.loadingSpinner}></div>
    </div>
    )
}

export default Loader