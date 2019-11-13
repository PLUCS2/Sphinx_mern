import React from "react";
import ProphecyBox from "../prophecies/prophecy_box";

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      prophecies: [], 
      users: []
    };
  }

  componentWillMount() {
    console.log(this.props.currentUser.id);
    this.props.fetchUserProphecies(this.props.currentUser.id);
    this.props.fetchUsers(); 
  }

  componentWillReceiveProps(newState) {
    this.setState({ prophecies: newState.prophecies, users: newState.users });
  }

  render() {
    if (this.state.prophecies.length === 0) {
      return <div>This user has no Prophecies</div>;
    } else {
      return (
        <div>
          <h2>All of This User's Prophecies</h2>
          {this.state.prophecies.map(prophecy => (
            <ProphecyBox key={prophecy._id} text={prophecy.text} userId={prophecy.user} users={this.state.users}/>
          ))}
        </div>
      );
    }
  }
}

export default Profile;
