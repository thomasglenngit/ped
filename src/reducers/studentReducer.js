import _ from 'lodash';
import {
  CREATE_STUDENT,
  EDIT_STUDENT,
  DELETE_STUDENT
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_STUDENT:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STUDENT:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STUDENT:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
