import { connect } from 'react-redux';
import BeerShow from './beer_show';
import { requestBeer } from '../../actions/beer_actions';
import { requestBeerReviews } from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => ({
  loadingBeer: state.beer.loadingOne,
  loadingReview: state.reviews.loadingOne,
  showBeer: state.beer.showBeer,
  feedType: ownProps.route.feedType,
  reviews: state.reviews.list
});

const mapDispatchToProps = (dispatch) => ({
  getBeer: (beerId) => dispatch(requestBeer(beerId)),
  getReviews: (beerId) => dispatch(requestBeerReviews(beerId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BeerShow);
