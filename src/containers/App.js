import React from "react";
import { connect } from "react-redux";
import { addTodos } from "../actions/add";
import { Input } from "../components/Input";
import List from "./List";

class App extends React.Component {
  componentDidMount() {
    if (this.textInput) {
      this.textInput.current.focus();
    }
  }

  textInput = React.createRef();

  addTodo = () => {
    const { addTodos } = this.props;
    const newtodo = this.textInput.current.value;
    if (newtodo !== "") {
      addTodos(newtodo);
      this.textInput.current.value = "";
    }
  };

  render() {
    return (
      <div className="App">
        <Input ref={this.textInput} addTodo={this.addTodo} />
        <List />
      </div>
    );
  }
}

const mapStatetoProps = () => ({});

const mapDispatchtoProps = dispatch => ({
  addTodos: value => dispatch(addTodos(value))
});

export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(App);
