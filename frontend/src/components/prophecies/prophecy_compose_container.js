import { connect } from "react-redux";
import { composeProphecy } from "../../actions/prophecy_actions";
import ProphecyCompose from "./prophecy_compose";

const mapStateToProps = state => {
  return {
    currentUser: state.session.user,
    newProphecy: state.prophecies.new
  };
};

const mapDispatchToProps = dispatch => {
  return {
    composeProphecy: data => dispatch(composeProphecy(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProphecyCompose);
