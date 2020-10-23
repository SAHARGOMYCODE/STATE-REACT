import React, { Component } from "react";
import sahar from "./sahar.jpg";

import "./App.css";

class App extends Component {
  constructor(props) {
    console.log("component Initialized App");
    super(props);
    this.state = {
      fullName: "Sahar KACHOUKH",
      bio: "I'm STUDENT IN GO MY CODE",
      imgSrc: <img src={sahar} alt="sahar" width="30%" />,
      profession: "FULLSTACK DEVELOPER",
      show: true,
      count: 0,
    };
  }

  toggle = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <div class="show">
          <p>{this.state.show ? this.state.fullName : null}</p>
          <p>{this.state.show ? this.state.bio : null}</p>
          <p> {this.state.show ? this.state.profession : null}</p>
          <p> {this.state.show ? this.state.imgSrc : null}</p>
          <button onClick={this.toggle} class="btn">
            {" "}
            {this.state.show ? "Hide" : "Start"}
          </button>{" "}
          <h2>Current Count :{count}</h2>
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.myInterval = setInterval(() => {
      this.setState((prevState) => ({
        count: prevState.count + 1,
      }));
    }, 1000);
  }
}
export default App;
