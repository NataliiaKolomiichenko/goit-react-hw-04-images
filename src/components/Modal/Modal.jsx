import css from "./Modal.module.css"
import { Component } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types"

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {

  static propTypes = {
    onToggle: PropTypes.func.isRequired,
    largeImage: PropTypes.string.isRequired,
    }

    handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onToggle();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  
  handleBackdrop = (event) => {
    if (event.currentTarget === event.target) {
      this.props.onToggle()
    }
  }
    
    render() {
      const { largeImage } = this.props;
      return (createPortal(
          <div className={css.overlay} onClick={this.handleBackdrop}>
                <div className={css.modal}>
                    <img src={largeImage} alt="" />
                </div>
            </div>, modalRoot
        )
      )
    }
}

export default Modal;