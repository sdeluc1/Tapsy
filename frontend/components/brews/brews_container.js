import { connect } from 'react-redux';
import BrewsIndex from './brews_index';

const mapStateToProps = (state, ownProps) => ({
  feedType: ownProps.route.feedType,
  reviews: state.reviews,
  beers: state.beer,
  loadingReviews: state.reviews.loading
});

export default connect(
  mapStateToProps
)(BrewsIndex);
