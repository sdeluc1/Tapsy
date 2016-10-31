import { connect } from 'react-redux';
import ReviewDetail from './review_detail';
import { addComment, requestComments } from '../../actions/comment_actions';
import { requestReviewDetail } from '../../actions/review_actions';

const mapStateToProps = (state) => ({
  showReview: state.reviews.showReview,
  reviewLoading: state.reviews.loadingOne
});

const mapDispatchToProps = (dispatch) => ({
  addComment: (comment) => dispatch(addComment(comment)),
  requestComments: (reviewId) => dispatch(requestComments(reviewId)),
  requestReviewDetail: (reviewId) => dispatch(requestReviewDetail(reviewId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewDetail);
