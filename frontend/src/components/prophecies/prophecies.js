import React from "react";
import { withRouter } from "react-router-dom";
import ProphecyBox from "./prophecy_box";

class Prophecy extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      prophecies: [],
      users: []
    };
  }

  componentWillMount() {
    this.props.fetchProphecies();
    this.props.fetchUsers();
  }

  componentWillReceiveProps(newState) {
    this.setState({ prophecies: newState.prophecies, users: newState.users });
  }

  render() {
    if (this.state.prophecies.length === 0) {
      return <div>There are no Prophecies</div>;
    } else {
      return (
        <div>
          <h2>All Prophecies</h2>
          {this.state.prophecies.map(prophecy => (
            <ProphecyBox key={prophecy._id} text={prophecy.text} userId={prophecy.user} users={this.state.users}/>
          ))}
        </div>
      );
    }
  }
}

export default withRouter(Prophecy);
