import { useDispatch } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";

const AnecdoteForm = () => {
  const dispatch = useDispatch();
  const addAnecdotes = (event) => {
    event.preventDefault();
    const content = event.target.anecdotes.value;
    event.target.anecdotes.value = "";
    dispatch(createAnecdote(content));
  };
  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnecdotes}>
        <div>
          <input name="anecdotes" />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default AnecdoteForm;
