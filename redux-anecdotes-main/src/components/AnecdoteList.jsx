import { useDispatch, useSelector } from "react-redux";
import { incrementVotes } from "../reducers/anecdoteReducer";
const AnecdoteList = () => {
  const dispatch = useDispatch();
  const anecdotes = useSelector((state) => state.sort(compareState));
  const vote = (id) => {
    dispatch(incrementVotes(id));
  };
  return (
    <div>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  );
};
const compareState = (a, b) => {
  return a.votes - b.votes;
};

export default AnecdoteList;
