import _ from 'lodash';
import {Platform, Alert} from 'react-native';
import Api from 'utils/Api' // eslint-disable-line

import {toggleLoading} from './globalLoading';

export const GET_CONTACT_DATA = 'contact/GET_CONTACT_DATA';
export const SET_REMOVE_DATA = 'contact/SET_REMOVE_DATA';

export const setData = payload => ({
  type: GET_CONTACT_DATA,
  payload,
});

export const setRemoveData = payload => ({
  type: SET_REMOVE_DATA,
  payload,
});

let isRequesting = false;
export const getContactList =
  (page, callback = () => {}) =>
  dispatch => {
    if (isRequesting) {
      return null;
    }

    isRequesting = true;
    if (page === 1) {
      dispatch(toggleLoading(true));
    }
    return Api.get('/api/?seed=lll', {
      params: {
        page,
        results: 25,
      },
    })
      .then(({data}) => {
        dispatch({
          type: GET_CONTACT_DATA,
          payload: {
            contact: data.results,
            total: data.info.results * page,
            current_page: page,
          },
        });
        callback();
      })
      .finally(() => {
        isRequesting = false;
        dispatch(toggleLoading(false));
      });
  };

export const unfriendAction =
  (items, callback = () => {}) =>
  (dispatch, getState) => {
    var getData = getState().contact.contactData.items;
    console.log('1 getData === ', getData.length);

    var idx = getData.indexOf(items);
    console.log('idx === ', idx);
    if (idx !== -1) {
        getData.splice(idx, 1);
    }

    console.log('2 getData === ', getData.length);

    dispatch(setRemoveData({
      contact: getData,
    }))

    callback();


    // const newArray = getData.filter(item => item.indexOf(items) !== -1);
    // console.log('newArray === ', newArray.length);
  };
