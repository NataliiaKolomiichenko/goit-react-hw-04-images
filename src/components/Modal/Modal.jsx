import css from "./Modal.module.css"
import { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types"

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onToggle, largeImage }) => {
  const handleKeyDown = event => {
    if (event.code === 'Escape') {
      onToggle();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => { window.removeEventListener('keydown', handleKeyDown) };
  })

  const handleBackdrop = (event) => {
    if (event.currentTarget === event.target) {
      onToggle()
    }
  }

  return (createPortal(
      <div className={css.overlay} onClick={handleBackdrop}>
            <div className={css.modal}>
                <img src={largeImage} alt="" />
            </div>
        </div>, modalRoot
    )
  )
}

Modal.propTypes = {
  onToggle: PropTypes.func.isRequired,
  largeImage: PropTypes.string.isRequired,
}

export default Modal;