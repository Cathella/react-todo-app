import React, { Component } from "react"

class InputTodo extends Component {
  state = {
    title: ""
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodoProps(this.state.title);
    this.setState({    title: ""  });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="title"
          type="text" 
          onChange={this.onChange} 
          placeholder="Add todo..." 
          value={this.state.title}
        />
        <button>Submit</button>
      </form>
    )
  }
}

export default InputTodo