import { connect } from 'react-redux';
import { createBeer } from '../../actions/beer_actions';
import { createBrewery, requestBreweries } from '../../actions/brewery_actions';
import AddForm from './add_form';

const mapStateToProps = (state, ownProps) => ({
  breweries: state.breweries,
  errors: state.errors,
  close: ownProps.close
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  formType: ownProps.formType,
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
