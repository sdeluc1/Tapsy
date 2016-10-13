import React from 'react';

class AddReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      rating: "0.0",
      // beer_id: this.props.beerId,
      imageFile: null,
      imageUrl: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.closeForm = this.closeForm.bind(this);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value});
    };
  }

  updateFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ imageFile: file, imageUrl: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e) {
    debugger
    e.preventDefault();
    const formData = new FormData();
    formData.append("review[description]", this.state.description);
    formData.append("review[rating]", this.state.rating);
    formData.append("review[beer_id]", this.props.beerId);
    if(this.state.imageFile){
      formData.append("review[image]", this.state.imageFile);
    }
    this.props.createReview(formData);
    this.props.process();
  }

  closeForm() {
    this.setState({
      description: "",
      rating: "0.0",
      // beer_id: this.props.beerId,
      imageFile: null,
      imageUrl: null
    });
    this.props.close();
  }


  render() {
    return(
      <div className="review-modal">
        <span id="review-modal-header">
          <p id="close-modal" onClick={this.closeForm}></p>
          <h2>Check-In</h2>
        </span>
        <div className="review-form-content">
          <form onSubmit={this.handleSubmit} id="review-form">

            <textarea
              onChange={this.update("description")}
              id="review-form-description"
              placeholder="What did you think?"
              value={this.state.description}>
            </textarea>

            <input type="file" id="review-photo-button" onChange={this.updateFile} />
            <div className="rating-slider">
              <input
                onChange={this.update("rating")}
                type="range"
                min="0.0"
                max="5.0"
                step="0.25"
                value={this.state.rating}
              />

              <p className="preview-image">
                <img id="review-img-prev" src={this.state.imageUrl} />
              </p>

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
