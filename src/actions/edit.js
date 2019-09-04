export const editTodos = (id, edit) => ({
  type: "EDIT_TODOS",
  payload: {
    edit: edit,
    id: id
  }
});
