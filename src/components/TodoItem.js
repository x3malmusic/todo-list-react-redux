import React from "react";

const style = {
  li: {
    border: "1px solid #ccc",
    marginBottom: "5px",
    width: "60%",
    display: "flex",
    justifyContent: "space-between",
    borderRadius: "5px"
  }
};

export const TodoItem = props => {
  const id = props.props.id;
  const deleteTodo = props.deleteTodo;
  const editTodo = props.editTodo;
  const title = props.props.title;
  const isDone = props.isDone;
  const done = props.props.done;
  const classes = [];

  if (done) {
    classes.push("done");
  }

  return (
    <li onContextMenu={e => editTodo(e, id)} key={id} style={style.li} id={id}>
      <span className={classes}>
        <input
          type="checkbox"
          checked={done}
          onChange={e => isDone(id, !done)}
        />
        {title}
      </span>
      <button onClick={e => deleteTodo(id)}>x</button>
    </li>
  );
};
