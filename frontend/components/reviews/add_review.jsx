import React from 'react';

class AddReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      rating: "0.0",
      author_id: this.props.currUserId,
      beer_id: this.props.beerId
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createReview({review: this.state});
    this.props.process();
  }


  render() {

    return(
      <div className="review-modal">
        <span id="review-modal-header">
          <p id="close-modal" onClick={this.props.close}></p>
          <h2>Check-In</h2>
        </span>
        <div className="review-form-content">
          <form onSubmit={this.handleSubmit} id="review-form">

            <textarea
              onChange={this.update("description")}
              id="review-form-description"
              placeholder="What did you think?">
            </textarea>

            <div id="review-photo-button"></div>

            <div className="rating-slider">
              <input
                onChange={this.update("rating")}
                type="range"
                min="0.0"
                max="5.0"
                step="0.25"
                value={this.state.rating}
              />

              <p className="rating-val-box">
                <span id="rating-value">{this.state.rating}</span>
                <span id="rating-word">RATING</span>
              </p>

              <button className="submit-review">Confirm</button>
            </div>

          </form>
        </div>
      </div>
    );

  }

}

export default AddReview;
