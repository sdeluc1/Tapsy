import React from 'react';
import Modal from 'react-modal';

class AddReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false }
  }

  openModal() {
    this.setState({ open: true });
  }

  closeModal() {
    this.setState({ open: false });
  }

  render() {

  }

}
