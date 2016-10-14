import { connect } from 'react-redux';
import BeerShow from './beer_show';
import { requestBeerReviews } from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => ({
  loadingBeer: state.beer.loadingOne,
  loadingReview: state.reviews.loadingAll,
  showBeer: state.beer.showBeer,
  feedType: ownProps.route.feedType,
  reviews: state.reviews.list
});

const mapDispatchToProps = (dispatch) => ({
  updateReviews: (beerId, callback) => dispatch(requestBeerReviews(beerId, callback))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BeerShow);
