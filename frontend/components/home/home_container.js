import { connect } from 'react-redux';
import HomeIndex from './home_index';
import { requestFollowedReviews } from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => ({
  feedType: ownProps.route.feedType,
  reviews: state.reviews.list,
  moreToAppend: state.reviews.moreToAppend,
  loading: state.reviews.loadingAll,
  user: state.session.currentUser,
  follows: state.follows
});

const mapDispatchToProps = (dispatch) => ({
  moreReviews: (currUser, offset, appending) => dispatch(requestFollowedReviews(currUser, offset, appending))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeIndex);
