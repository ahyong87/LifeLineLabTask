import {combineReducers} from 'redux';

import globalLoading from './globalLoading';
import auth from './auth';
import contact from './contact';

export default combineReducers({globalLoading, auth, contact});
