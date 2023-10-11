const useBill = () => {
  let state = 0;

  const setState = (newState) => {
    state = newState;
  };
  const getState = () => state;
  return [getState, setState];
};
const useTips = () => {
  let state = 0;

  const setState = (newState) => {
    state = newState;
  };
  const getState = () => state;
  return [getState, setState];
};
const usePeople = () => {
  let state = 0;

  const setState = (newState) => {
    state = newState;
  };
  const getState = () => state;
  return [getState, setState];
};
