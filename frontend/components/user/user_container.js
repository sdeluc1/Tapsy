import { connect } from 'react-redux';
import UserShow from './user_show';

const mapStateToProps = ({ user }) => ({
  user
});


export default connect(
  mapStateToProps
)(UserShow);
