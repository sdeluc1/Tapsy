import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';

const ModalReducer = (state = {open: false}, action) => {
  switch(action.type) {
    case OPEN_MODAL:
      return { open: true };

    case CLOSE_MODAL:
      return { open: false };

    default:
      return state;
  }
};

export default ModalReducer;
