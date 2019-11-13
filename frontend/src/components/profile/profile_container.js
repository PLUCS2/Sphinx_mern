import { connect } from "react-redux";
import { fetchUserProphecies } from "../../actions/prophecy_actions";
import Profile from "./profile";

const mapStateToProps = state => {
  return {
    prophecies: Object.values(state.prophecies.user),
    currentUser: state.session.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserProphecies: id => dispatch(fetchUserProphecies(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
