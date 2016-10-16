import { connect } from 'react-redux';
import HomeIndex from './home_index';

const mapStateToProps = (state, ownProps) => ({
  feedType: ownProps.route.feedType,
  reviews: state.reviews.list,
  loading: state.reviews.loadingAll,
  user: state.session.currentUser,
  follows: state.follows
});

export default connect(
  mapStateToProps
)(HomeIndex);
