import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const signup = (details,history) => async (dispatch) => {
    try {
      const { data } = await api.signUp(details);
      
      dispatch({ type: AUTH, payload: data });
      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };
  export const signin = (details,history) => async (dispatch) => {
    try {
      const { data } = await api.signIn(details);
      
      dispatch({ type: AUTH, payload: data });
      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };