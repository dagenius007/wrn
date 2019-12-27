import * as t from 'redux/types';
import { URL } from 'config/url';
import axios from 'axios';
import { loading, endLoading } from 'redux/loader.dispatcher';
import { errorHandler } from 'utilis/error';
import request from 'config/baseUrl';

export const clearMessage = () => dispatch => {
  dispatch({ type: t.CLEAR_MESSAGES });
};

export const signUp = userData => async dispatch => {
  loading('signUp');
  try {
    const {
      data: { data }
    } = await axios.post(`${URL}/customer/customer/signup`, userData);

    dispatch({ type: t.SIGNUP, payload: data });
    dispatch({
      type: t.GET_SUCCESS,
      payload: 'Sign up was successful. Check your email to continue'
    });
  } catch (err) {
    let customError = {};
    if (err && err.response) {
      customError[err.response.status] = err.response.data.message;
    }
    errorHandler(err, dispatch, customError);
  }
  endLoading('signUp');
};

export const setCurrentUser = user => {
  return { type: t.SET_USER, payload: user };
};

export const login = userData => async dispatch => {
  loading('login');
  try {
    const {
      data: { token, data }
    } = await axios.post(`${URL}/customer/customer/login`, userData);

    localStorage.setItem('tixhut_user_token', token);
    localStorage.setItem(
      'tixhut_user',
      JSON.stringify({
        _id: data._id,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phoneNumber: data.phoneNumber,
        role: data.role
      })
    );
    dispatch({
      type: t.GET_SUCCESS,
      payload: ''
    });
    dispatch(setCurrentUser(data));
  } catch (err) {
    let customError = {};
    if (err && err.response) {
      customError[err.response.status] = err.response.data.message;
    }
    errorHandler(err, dispatch, customError);
  }
  endLoading('login');
};

export const verify = (otp, key) => async dispatch => {
  loading('verify');
  try {
    const {
      data: { token, data }
    } = await axios.post(`${URL}/customer/customer/account/${key}/verify`, {
      otp
    });

    dispatch({
      type: t.GET_SUCCESS,
      payload: 'Account was verified successfully'
    });
  } catch (err) {
    let customError = {};
    if (err && err.response) {
      customError[err.response.status] = err.response.data.message;
    }

    errorHandler(err, dispatch, customError);
  }

  endLoading('verify');
};

export const updateUser = (user, id) => async dispatch => {
  loading('updateUser');
  try {
    const {
      data: { token, data }
    } = await request.put(`/customer/customer/${id}`, user);

    dispatch({
      type: t.GET_SUCCESS,
      payload: user.hasOwnProperty('interest')
        ? 'Your interest was updated successfully'
        : ''
    });
  } catch (err) {
    let customError = {};
    if (err && err.response) {
      customError[err.response.status] = err.response.data.message;
    }
    errorHandler(err, dispatch, customError);
  }

  endLoading('updateUser');
};


export const updatePassword = (password, key) => async dispatch => {
  loading('updatePassword');
  try {
    const {
      data: { token, data }
    } = await axios.post(`${URL}/customer/customer/complete-signup/${key}`, {
      password
    });

    localStorage.setItem('tixhut_user_token', token);
    localStorage.setItem(
      'tixhut_user',
      JSON.stringify({
        _id: data._id,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        role: data.role
      })
    );

    dispatch({
      type: t.GET_SUCCESS,
      payload: 'Your password has been  verified'
    });
  } catch (err) {
    let customError = {};
    if (err && err.response) {
      customError[err.response.status] = err.response.data.message;
    }

    errorHandler(err, dispatch, customError);
  }
  endLoading('updatePassword');
};

export const forgetPassword = email => async dispatch => {
  loading('forgetPassword');
  try {
    const {
      data: { token, data }
    } = await axios.post(`${URL}/customer/customer/forgot-password`, {
      email
    });

    dispatch({
      type: t.GET_SUCCESS,
      payload: 'Check your email to continue'
    });
  } catch (err) {
    let customError = {};
    if (err && err.response) {
      customError[err.response.status] = err.response.data.message;
    }

    errorHandler(err, dispatch, customError);
  }
  endLoading('forgetPassword');
};

export const resetPassword = (password, token) => async dispatch => {
  loading('resetPassword');
  try {
    const {
      data: { data }
    } = await axios.post(`${URL}/customer/customer/reset-password`, {
      password,
      token
    });

    dispatch({
      type: t.GET_SUCCESS,
      payload: 'Password reset was successful'
    });
  } catch (err) {
    let customError = {};
    if (err && err.response) {
      customError[err.response.status] = err.response.data.message;
    }

    errorHandler(err, dispatch, customError);
  }
  endLoading('resetPassword');
};

export const logoutUser = () => dispatch => {
  // remove token from local storage
  localStorage.removeItem('tixhut_user_token');
  localStorage.removeItem('tixhut_user');
  dispatch(setCurrentUser({}));
};
