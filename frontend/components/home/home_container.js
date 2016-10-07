import { connect } from 'react-redux';
import HomeIndex from './home_index';

const mapStateToProps = (state, ownProps) => ({
    feedType: ownProps.route.feedType,
    reviews: state.reviews,
    loading: state.reviews.loading,
    user: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeIndex);
