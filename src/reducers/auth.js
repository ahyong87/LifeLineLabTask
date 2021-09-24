import update from 'immutability-helper';

import {GET_LOGIN_DATA} from 'actions/auth';

const initialState = {
  loginData: [],
};

export default function auth(state = initialState, {type, payload}) {
  switch (type) {
    case GET_LOGIN_DATA: {
      return update(state, {
        loginData: {
          $set: payload,
        },
      });
    }

    default:
      return state;
  }
}
