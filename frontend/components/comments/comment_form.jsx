import React from 'react';

class CommentForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      body: "",
      review_id: this.props.reviewId
    }
  }

  updateBody() {
    return e => {
      this.setState({ body: e.currentTarget.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addComment(this.state);
  }

  render() {
    return(
      <div className="add-comment">
        <form onSubmit={this.handleSubmit} className="comment-form">
          <textarea id="comment-body" onChange={this.updateBody} placeholder="Add Comment"></textarea>
          <button id="submit-comment">Submit</button>
        </form>
      </div>
    );
  }

}

export default CommentForm;
