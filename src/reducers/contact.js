import update from 'immutability-helper';

import {GET_CONTACT_DATA, SET_REMOVE_DATA} from 'actions/contact';

const initialState = {
  contactData: {
    items: [],
    total: 0,
    current_page: 1,
  },
};

export default function contact(state = initialState, {type, payload}) {
  switch (type) {
    case GET_CONTACT_DATA: {
      const method = payload.current_page === 1 ? '$set' : '$push';
      return update(state, {
        contactData: {
          items: {
            [method]: payload.contact,
          },
          total: {
            $set: payload.total,
          },
          current_page: {
            $set: payload.current_page,
          },
        },
      });
    }

    case SET_REMOVE_DATA: {
      return update(state, {
        contactData: {
          items: {
            $set: payload.contact,
          },
        },
      });
    }

    default:
      return state;
  }
}
