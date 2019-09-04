const intitialState = {
  todos: null
};

export default (state = intitialState, action) => {
  let newState;
  switch (action.type) {
    case "SET_TODOS":
      return {
        ...state,
        todos: action.payload
      };
    case "ADD_TODOS":
      return {
        ...state,
        todos: [
          ...state.todos,
          { title: action.payload, id: state.todos.length, done: false }
        ]
      };
    case "DELETE_TODOS":
      newState = state.todos
        .filter(o => o.id !== action.payload)
        .map((todo, id) => {
          return {
            title: todo.title,
            id: id,
            done: todo.done
          };
        });
      return {
        ...state,
        todos: newState
      };
    case "EDIT_TODOS":
      newState = state.todos.map((todo, id) => {
        if (todo.id === action.payload.id) {
          return {
            title: action.payload.edit,
            id: id,
            done: todo.done
          };
        }
        return {
          title: todo.title,
          id: id,
          done: todo.done
        };
      });
      return {
        ...state,
        todos: newState
      };
    case "SET_DONE":
      newState = state.todos.map((todo, id) => {
        if (todo.id === action.payload.id) {
          return {
            title: todo.title,
            done: action.payload.done,
            id: todo.id
          };
        }
        return {
          title: todo.title,
          id: id,
          done: todo.done
        };
      });
      return {
        ...state,
        todos: newState
      };
    default:
      return state;
  }
};
