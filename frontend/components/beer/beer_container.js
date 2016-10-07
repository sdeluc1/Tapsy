import { connect } from 'react-redux';
import BeerShow from './beer_show';

const mapStateToProps = (state, ownProps) => ({
  loading: state.beer.loading,
  showBeer: state.beer.showBeer,
  feedType: ownProps.route.feedType,
  reviews: state.reviews
});

export default connect(
  mapStateToProps
)(BeerShow);
