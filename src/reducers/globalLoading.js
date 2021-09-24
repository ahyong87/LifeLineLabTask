import update from 'immutability-helper';

import {TOGGLE_LOADING} from 'actions/globalLoading';

const initialState = {
  isLoading: false,
};

export default function globalLoading(state = initialState, {type, payload}) {
  switch (type) {
    case TOGGLE_LOADING: {
      return update(state, {
        isLoading: {
          $set: payload.isLoading,
        },
      });
    }

    default:
      return state;
  }
}
