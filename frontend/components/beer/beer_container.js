import { connect } from 'react-redux';
import BeerShow from './beer_show';
import { requestBeer } from '../../actions/beer_actions';
import { requestBeerReviews } from '../../actions/review_actions';
import { removeReview } from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => ({
  loadingBeer: state.beer.loadingOne,
  loadingReview: state.reviews.loadingOne,
  showBeer: state.beer.showBeer,
  feedType: ownProps.route.feedType,
  reviews: state.reviews.list,
  moreToAppend: state.reviews.moreToAppend,
  currUserId: state.session.currentUser.id
});

const mapDispatchToProps = (dispatch) => ({
  getBeer: (beerId) => dispatch(requestBeer(beerId)),
  moreReviews: (beerId, offset, appending) => dispatch(requestBeerReviews(beerId, offset, appending)),
  removeReview: (id) => dispatch(removeReview(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BeerShow);
