import { connect } from "react-redux";
import { fetchUserProphecies } from "../../actions/prophecy_actions";
import { fetchUsers } from "../../actions/user_actions";
import Profile from "./profile";

const mapStateToProps = state => {
  return {
    prophecies: Object.values(state.prophecies.user),
    currentUser: state.session.user, 
    users: Object.values(state.users)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserProphecies: id => dispatch(fetchUserProphecies(id)), 
    fetchUsers:  () =>  dispatch(fetchUsers())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
