import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "Welcome to React!",
      hasLoaded: false,
      today: new Date(),
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleInput(e) {
    // console.log(e.target.value);
    this.setState({
      text: e.target.value,
    });
  }

  handleClick() {
    this.setState({
      hasLoaded: true,
      hasLoaded: this.state.hasLoaded ? false : true,
    });
  }

  componentDidMount() {
    console.log("App - Mount")
    this.setState({hasLoaded: true});
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("App - Update (prevProps)", prevProps);
  componentDidUpdate(prevState) {
    console.log("App - Update (prevState)", prevState);
  }

  componentWillUnmount() {
    console.log("App - Unmount");
  }

  render() {
    if (this.state.hasLoaded) {
      console.log("App - Render (has Loaded)");
      return (
        <div>
          <div>
            <input
              placeholder={this.state.text}
              onChange={this.handleInput}
            ></input>
          </div>
          <div>
        <main>
          <Navbar today={this.state.today} />
          <div style={{ margin: "2rem 0" }}>
            <input placeholder={this.state.text} onChange={this.handleInput} />
            <button onClick={this.handleClick}>Advance</button>
          </div>
          <hr />
          <div>
            <hr></hr>
            <h1>
              {this.props.value} {this.state.text}
            </h1>
            <h1>{this.state.text}</h1>
          </div>
        </div>
        </main>
      );
    } else {
      console.log("App - Render (has not loaded)");
      return (
        <div>
        <main>
          <h1>Loading...</h1>
          <button onClick={this.handleClick}>Load Page</button>
        </div>
        </main>
      );
    }
  }
}

export default App;
