import { connect } from 'react-redux';
import { createBeer } from '../../actions/beer_actions';
import { createBrewery, requestBreweries } from '../../actions/brewery_actions';
import AddForm from './add_form';

const mapStateToProps = (state) => ({
  breweries: state.breweries,
  errors: state.errors,
  open: state.modal.open 
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  formType: ownProps.location.pathname === '/add-beer' ? 'beer' : 'brewery',
  processForm: (data, formType) => {
    if (formType === 'beer') {
      dispatch(createBeer(data));
    } else {
      dispatch(createBrewery(data));
    }
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddForm);
