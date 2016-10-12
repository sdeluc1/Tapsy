import { connect } from 'react-redux';
import BrewsIndex from './brews_index';

const mapStateToProps = (state, ownProps) => ({
  feedType: ownProps.route.feedType,
  reviews: state.reviews.list,
  beers: state.beer.top_beers,
  loadingReviews: state.reviews.loading,
  loadingBeer: state.beer.loadingAll
});

export default connect(
  mapStateToProps
)(BrewsIndex);
