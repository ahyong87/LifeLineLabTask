import axios from 'axios';
import {Alert, Platform} from 'react-native';
import store from 'configs/store' // eslint-disable-line


let source;
const api = axios.create({
  baseURL: 'https://randomuser.me',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 120000,
});

function cancel(message = 'Request canceled') {
  if (source) {
    source.cancel(message);
  }
}

function handleError(error, url) {
  console.log('error === ', error);
  console.log('url === ', url);
  if (error.response) {
    const {status, data} = error.response;
    switch (status) {
      case 400:
        break;
      case 401:
      case 403:
      case 404:
        break;
      case 406:
        // Not acceptable due to refresh token error loop
        break;
      case 500:
        break;
      default:
        Alert.alert('Error', data.error);
        break;
    }
  } else if (error.message === 'Network Error') {
    Alert.alert('Error', 'Network Error, Please try again');
  } else {
    Alert.alert('Error', error.message);
  }

  throw new Error(error);
}

function customFetch(url, method, customOptions = {}) {
  source = axios.CancelToken.source();
  const options = {
    method,
    url,
    cancelToken: source.token,
    ...customOptions,
    headers: {
      'Content-Type': 'application/json',
      ...customOptions.headers,
    },
  };
  return api.request(options).catch(error => handleError(error, url));
}

function get(url, options) {
  return customFetch(url, 'GET', options);
}

function post(url, options) {
  return customFetch(url, 'POST', options);
}

function put(url, options) {
  return customFetch(url, 'PUT', options);
}

function patch(url, options) {
  return customFetch(url, 'PATCH', options);
}

// delete is a keyword
function remove(url, options) {
  return customFetch(url, 'DELETE', options);
}

export default {get, post, put, patch, remove, cancel};
