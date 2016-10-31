import { connect } from 'react-redux';
import Search from './search';
import { requestSearch } from '../../actions/search_actions';

const mapStateToProps = (state) => ({
  beerSearch: state.search
});

const mapDispatchToProps = (dispatch) => ({
  requestSearch: (query) => dispatch(requestSearch(query))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
