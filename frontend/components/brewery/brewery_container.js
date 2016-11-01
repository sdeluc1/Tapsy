import { connect } from 'react-redux';
import BreweryShow from './brewery_show';
import { requestBreweryReviews } from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => ({
  loadingBrewery: state.breweries.loading,
  showBrewery: state.breweries.showBrewery,
  feedType: ownProps.route.feedType,
  reviews: state.reviews.list
});

const mapDispatchToProps = (dispatch) => ({
  moreReviews: (breweryId, offset, appending) => dispatch(requestBreweryReviews(breweryId, offset, appending))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BreweryShow);
