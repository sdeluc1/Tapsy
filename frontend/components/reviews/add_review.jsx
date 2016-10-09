import React from 'react';

class AddReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      rating: "0.0",
      author_id: this.props.currUserId,
      beer_id: this.props.beerId
    }
  }



  render() {

    return(
      <div className="review-modal">
        <span id="review-modal-header">
          <p id="close-modal" onClick={this.props.close}></p>
          <h2>Check-In</h2>
        </span>
        <div className="review-form-content">
          <form id="review-form">
            <textarea id="review-form-description" placeholder="What did you think?"></textarea>
            <div id="review-photo-button"></div>
          </form>
        </div>
      </div>
    );

  }

}

export default AddReview;
