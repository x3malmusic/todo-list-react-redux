export const isDone = (id, done) => ({
  type: "SET_DONE",
  payload: {
    id: id,
    done: done
  }
});
