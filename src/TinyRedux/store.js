export const createStore = reducer => {
  let state;
  const subscribers = [];
  const coreDispatch = action => {
    state = reducer(state, action);
    subscribers.forEach(handler => handler());
  };
  const getState = () => state;
  const store = {
    dispatch: coreDispatch,
    getState,
    subscribe: handler => {
      subscribers.push(handler);
      return () => {
        const index = subscribers.indexOf(handler);
        if (index > 0) {
          subscribers.splice(index, 1);
        }
      };
    }
  };
  coreDispatch({type: '@@redux/INIT'});
  return store;
};