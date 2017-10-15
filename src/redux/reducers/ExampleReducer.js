import {
  ACTION_TYPE_EXAMPLE
} from '../actions/action_types';

const INITIAL_STATE = {
  field: 'value'
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTION_TYPE_EXAMPLE:
      return {...state, field: action.payload}
      break;
    default:
      return state;
      break;
  }
}
