import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { setTodos } from "../actions/set";
import { deleteTodos } from "../actions/delete";
import { editTodos } from "../actions/edit";
import { isDone } from "../actions/done";
import { TodoItem } from "../components/TodoItem";

class List extends React.Component {
  componentDidMount() {
    const { setTodos } = this.props;
    axios.get("/todos.json").then(({ data }) => {
      setTimeout(function() {
        setTodos(data);
      }, 1000);
    });
  }

  deleteTodo = id => {
    const { deleteTodos } = this.props;
    deleteTodos(id);
  };

  editTodo = (e, id) => {
    e.preventDefault();
    const edit = prompt("Enter a new value", "");
    const { editTodos } = this.props;
    if (edit === null || edit === "") {
      return null;
    }
    editTodos(id, edit);
  };

  TodoDone = (id, done) => {
    const { isDone } = this.props;
    isDone(id, done);
  };

  render() {
    const { todos } = this.props;
    return (
      <ul>
        {!todos
          ? "loading..."
          : todos.map(todo => (
              <TodoItem
                props={todo}
                editTodo={this.editTodo}
                deleteTodo={this.deleteTodo}
                isDone={this.TodoDone}
              />
            ))}
      </ul>
    );
  }
}

const mapStatetoProps = ({ todos }) => ({
  todos: todos
});

const mapDispatchtoProps = dispatch => ({
  setTodos: todos => dispatch(setTodos(todos)),
  deleteTodos: id => dispatch(deleteTodos(id)),
  editTodos: (id, edit) => dispatch(editTodos(id, edit)),
  isDone: (id, done) => dispatch(isDone(id, done))
});

export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(List);
