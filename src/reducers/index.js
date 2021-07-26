import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import { firestoreReducer } from 'redux-firestore';


const rootReducer =  combineReducers({
  auth: authReducer,
  form: formReducer,
  firestore: firestoreReducer
});

export default rootReducer