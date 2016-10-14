import React from 'react';

class CommentForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      body: "",
      review_id: this.props.reviewId
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateBody = this.updateBody.bind(this);
  }

  updateBody() {
    return e => {
      if(e.currentTarget.value === ""){
        $('#submit-comment').css("background-color", "#ccc");
      } else {
        $('#submit-comment').css("background-color", "#ffcc00");
      }
      this.setState({ body: e.currentTarget.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addComment({ comment: this.state });
    this.props.getComments(this.props.reviewId);
    this.props.reloadReview(this.props.reviewId);
    $('#submit-comment').css("background-color", "#ccc");
    this.setState({ body: "" });
  }

  render() {
    return(
      <div className="add-comment">
        <form onSubmit={this.handleSubmit} className="comment-form">
          <textarea
            id="comment-body"
            onChange={this.updateBody()}
            placeholder="Add Comment"
            value={this.state.body}>
          </textarea>
          <button id="submit-comment">Submit</button>
        </form>
      </div>
    );
  }

}

export default CommentForm;
