import { connect } from 'react-redux';
import BreweryShow from './brewery_show';
import { requestBreweryReviews, removeReview } from '../../actions/review_actions';
import { requestBrewery } from '../../actions/brewery_actions';

const mapStateToProps = (state, ownProps) => ({
  loadingBrewery: state.breweries.loading,
  showBrewery: state.breweries.showBrewery,
  feedType: ownProps.route.feedType,
  reviews: state.reviews.list,
  moreToAppend: state.reviews.moreToAppend,
  currUserId: state.session.currentUser.id
});

const mapDispatchToProps = (dispatch) => ({
  moreReviews: (breweryId, offset, appending) => dispatch(requestBreweryReviews(breweryId, offset, appending)),
  removeReview: (id) => dispatch(removeReview(id)),
  requestBrewery: (id) => dispatch(requestBrewery(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BreweryShow);
