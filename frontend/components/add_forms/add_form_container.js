import { connect } from 'react-redux';
import { createBeer } from '../../actions/beer_actions';
import { createBrewery, requestBreweries } from '../../actions/brewery_actions';
import AddForm from './add_form';
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => ({
  breweries: state.breweries,
  errors: state.errors,
  close: ownProps.close
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  formType: ownProps.formType,
  processForm: (data, formType, callback) => {
    if (formType === 'beer') {
      dispatch(createBeer(data, callback));
    } else {
      dispatch(createBrewery(data, callback));
    }
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AddForm));
