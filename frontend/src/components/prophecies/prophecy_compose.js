import React from "react";
import ProphecyBox from "./prophecy_box";

class ProphecyCompose extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      newProphecy: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ newProphecy: nextProps.newProphecy.text });
  }

  handleSubmit(e) {
    e.preventDefault();
    let prophecy = {
      text: this.state.text
    };

    this.props.composeProphecy(prophecy);
    this.setState({ text: "" });
  }

  update() {
    return e =>
      this.setState({
        text: e.currentTarget.value
      });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="textarea"
              value={this.state.text}
              onChange={this.update()}
              placeholder="Write your prophecy..."
            />
            <input type="submit" value="Submit" />
          </div>
        </form>
        <br />
        <ProphecyBox text={this.state.newProphecy} />
      </div>
    );
  }
}

export default ProphecyCompose;
