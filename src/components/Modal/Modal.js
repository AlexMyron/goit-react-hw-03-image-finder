import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { ModalContent, Overlay } from './Modal.styled';
import React, { Component } from 'react';

const Modal = ({ handleOverlayClick, handleKeycode, children }) => {
  useEffect(() => {
    const handleKeydown = e => {
      if (e.code !== 'Escape') return;
      handleKeycode();
    };

    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  });

  return (
    <Overlay onClick={handleOverlayClick}>
      <ModalContent>{children}</ModalContent>
    </Overlay>
  );
};

// -----------------
class classedModal extends Component {
  componentDidMount = () => {
    window.addEventListener('keydown', this.handleKeydown);
  };

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = e => {
    if (e.code !== 'Escape') return;
    this.props.handleKeycode();
  };

  render() {
    return (
      <Overlay onClick={this.props.handleOverlayClick}>
        <ModalContent>{this.props.children}</ModalContent>
      </Overlay>
    );
  }
}

Modal.propTypes = { handleOverlayClick: PropTypes.func.isRequired };

export default Modal;
