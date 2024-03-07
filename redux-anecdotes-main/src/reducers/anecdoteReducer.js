const anecdotesAtStart = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

const getId = () => (100000 * Math.random()).toFixed(0);

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0,
  };
};

const initialState = anecdotesAtStart.map(asObject);

const reducer = (state = initialState, action) => {
  // console.log("state now: ", state);
  // console.log("action", action);
  if (action.type === "INC_VOTE") {
    const id = action.payload;
    //console.log(id);
    const tobeUpdated = state.find((x) => x.id === id);
    //console.log(tobeUpdated);
    const updatedState = { ...tobeUpdated, votes: ++tobeUpdated.votes };
    const updatedList = state.map((x) => (x.id !== id ? x : updatedState));
    return updatedList;
  } else if (action.type === "ADD_ANECDOTES") {
    return state.concat(action.payload);
  }
  return state;
};
const incrementVotes = (id) => {
  return { type: "INC_VOTE", payload: id };
};
const createAnecdote = (content) => {
  return {
    type: "ADD_ANECDOTES",
    payload: {
      content: content,
      id: getId(),
      votes: 0,
    },
  };
};
export { incrementVotes, createAnecdote };
export default reducer;
