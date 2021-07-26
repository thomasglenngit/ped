import {
  CREATE_STUDENT,
  // EDIT_STUDENT,
  // DELETE_STUDENT,
  SIGN_IN,
  SIGN_OUT,
} from './types';

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const createStudent = formValues => (dispatch, getState) => {
  const { userId } = getState().auth
  const response = { ...formValues, userId }

  dispatch({ type: CREATE_STUDENT, payload: response.data })
}

// export const editStudent = (id, formValues) => (dispatch) => {
//   const response = ( ...formValues, id);

//   dispatch({ type: EDIT_STUDENT, payload: response.formValues });
//   history.push('/');
// };