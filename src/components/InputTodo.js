import React, { Component } from "react"

class InputTodo extends Component {
  state = {
    title: ""
  };

  onChange = e => {
    this.setState({
      title: e.target.value
    });
  };

  render() {
    return (
      <form>
        <input type="text" onChange={this.onChange} placeholder="Add todo..." value={this.state.title} />
        <button>Submit</button>
      </form>
    )
  }
}

export default InputTodo