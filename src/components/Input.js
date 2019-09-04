import React from "react";

export const Input = React.forwardRef((props, ref) => {
  return (
    <div>
      <input type="text" ref={ref} />
      <button onClick={props.addTodo}>add todo</button>
    </div>
  );
});
