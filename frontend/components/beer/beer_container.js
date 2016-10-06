import { connect } from 'react-redux';
import BeerShow from './beer_show';

const mapStateToProps = (state) => ({
  loading: state.beer.loading,
  showBeer: state.beer.showBeer  
});

// const mapDispatchToProps = (dispatch) => ({
//
// });

export default connect(
  mapStateToProps
)(BeerShow);
