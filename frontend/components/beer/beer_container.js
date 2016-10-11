import { connect } from 'react-redux';
import BeerShow from './beer_show';
import { requestReviews } from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => ({
  loadingBeer: state.beer.loading,
  loadingReview: state.reviews.loadingAll,
  showBeer: state.beer.showBeer,
  feedType: ownProps.route.feedType,
  reviews: state.reviews.list
});

const mapDispatchToProps = (dispatch) => ({
  updateReviews: () => dispatch(requestReviews())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BeerShow);
