const initialState = {
  signInModal: false
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_MODAL':
      let currentModal = action.payload;
      let modalState = state.signInModal;

      return { ...state, [currentModal]: !modalState };

    default:
      return state;
  }
};

export default rootReducer;