import { connect } from 'react-redux';
import BeerShow from './beer_show';
import { requestBeerReviews } from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => ({
  loadingBeer: state.beer.loadingOne,
  loadingReview: state.reviews.loadingOne,
  showBeer: state.beer.showBeer,
  feedType: ownProps.route.feedType,
  reviews: state.reviews.list
});

export default connect(
  mapStateToProps
)(BeerShow);
