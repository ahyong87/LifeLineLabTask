import _ from 'lodash';
import {Platform, Alert} from 'react-native';
import Api from 'utils/Api' // eslint-disable-line

import {toggleLoading} from './globalLoading';

export const GET_LOGIN_DATA = 'auth/GET_LOGIN_DATA';

export const setData = payload => ({
  type: GET_LOGIN_DATA,
  payload,
});

export const getLoginData =
  (callback = () => {}) =>
  dispatch => {
    dispatch(toggleLoading(true));
    Api.get('/api/?seed=lll')
      .then(({data}) => {
        dispatch(setData(data.results));
        callback();
      })
      .finally(() => {
        // dispatch(toggleLoading(false));
      });
  };
