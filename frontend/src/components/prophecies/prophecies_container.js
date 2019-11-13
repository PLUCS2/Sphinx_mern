import { connect } from "react-redux";
import { fetchProphecies } from "../../actions/prophecy_actions";
import { fetchUsers } from "../../actions/user_actions";
import Prophecies from "./prophecies";

const mapStateToProps = state => {
  return {
    prophecies: Object.values(state.prophecies.all), 
    users: Object.values(state.users)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProphecies: () => dispatch(fetchProphecies()),
    fetchUsers: () => dispatch(fetchUsers())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Prophecies);
