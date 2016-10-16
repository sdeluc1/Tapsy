import { connect } from 'react-redux';
import AddReview from './add_review';
import { createReview, reviewsLoading } from '../../actions/review_actions';

const mapStateToProps = ({ session }, ownProps) => ({
  currUserId: session.currentUser.id,
  beerId: ownProps.beerId,
  close: ownProps.close
});

const mapDispatchToProps = (dispatch) => ({
  createReview: (review) => dispatch(createReview(review)),
  reviewsLoading: () => dispatch(reviewsLoading())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddReview);
