import React from "react";

class ProphecyBox extends React.Component {
  render() {
    if (this.props.users) {
      let author;
      this.props.users.forEach( user => {
        if (user._id === this.props.userId) {
          author = user.handle;
        }
      });
      return (
        <div>
          <h3>{this.props.text} - {author}</h3>
        </div>
      );
    } else {
      return (
        <div>
          <h3>{this.props.text}</h3>
        </div>
      ); 
    }
  }
}

export default ProphecyBox;
