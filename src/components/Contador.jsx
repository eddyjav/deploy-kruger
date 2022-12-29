import React from 'react';

class Contador extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  render() {
    return (
      <div>
        <p>{`The count is ${this.state.count}`}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          Decremetn
        </button>
        <button onClick={() => this.setState({ count: this.state.count = 0 })}>
          REset
        </button>
      </div>
    );
  }
}

export default Contador;
