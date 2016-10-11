import { connect } from 'react-redux';
import ReviewDetail from './review_detail';

const mapStateToProps = (state) => ({
  showReview: state.reviews.showReview,
  reviewLoading: state.reviews.loadingOne
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps
)(ReviewDetail);
