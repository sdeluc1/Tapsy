import { connect } from 'react-redux';
import BreweryShow from './brewery_show';

const mapStateToProps = (state, ownProps) => {
  debugger
  return {
  loadingBrewery: state.breweries.loading,
  showBrewery: state.breweries.showBrewery,
  feedType: ownProps.route.feedType,
  reviews: state.reviews
};};

export default connect(
  mapStateToProps
)(BreweryShow);
