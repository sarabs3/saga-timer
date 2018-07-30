export default (state = { loading: false, data: null }, action) => {
  switch (action.type) {
    case 'SIMPLE_ACTION_LOADING': {
      return { ...state, loading: true };
    }
    case 'SIMPLE_ACTION':
      return { ...state, loading: false, data: action.payload };
    default:
      return state;
  }
};
