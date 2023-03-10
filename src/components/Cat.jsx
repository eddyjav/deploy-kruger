import React from 'react';

export class Cat extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sleeping: true };
  }
  render() {
    return (
      <div>
        <p>{`The cat is ${this.state.sleeping ? 'sleeping' : 'eating'}`}</p>
        <button onClick={() => this.setState({ sleeping: false })}>
          Wake up!
        </button>
      </div>
    );
  }
}

 