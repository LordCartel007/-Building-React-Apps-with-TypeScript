import React, { Component } from "react";

// Define the type for the component state
// This ensures the `state` object always has the structure we expect
interface CounterState {
  count: number; // Expecting a number for the count state
}

// It extends `Component` from React with no props (`{}`) and the defined `CounterState`
class Counter extends Component<{}, CounterState> {
  state: CounterState = {
    count: 0,
  };

  // Define the increment method with proper typing
  increment = (): void => {
    this.setState({ count: this.state.count + 1 });
  };

  // The `render` method returns JSX to define the component's UI
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
