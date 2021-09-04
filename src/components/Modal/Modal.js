import PropTypes from 'prop-types';
import { ModalContent, Overlay } from './Modal.styled';
import React, { Component } from 'react';

class Modal extends Component {
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
