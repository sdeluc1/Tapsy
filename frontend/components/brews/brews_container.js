import { connect } from 'react-redux';
import BrewsIndex from './brews_index';
import { requestReviews } from '../../actions/review_actions';
import { removeReview } from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => ({
  feedType: ownProps.route.feedType,
  reviews: state.reviews.list,
  moreToAppend: state.reviews.moreToAppend,
  beers: state.beer.top_beers,
  loadingReviews: state.reviews.loading,
  loadingBeer: state.beer.loadingAll,
  currUserId: state.session.currentUser.id
});

const mapDispatchToProps = (dispatch) => ({
  moreReviews: (offset, appending) => dispatch(requestReviews(offset, appending))
  removeReview: (id) => dispatch(removeReview(id));
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BrewsIndex);
