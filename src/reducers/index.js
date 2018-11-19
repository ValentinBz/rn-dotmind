// @flow
import { combineReducers } from 'redux';
import reducerData from './getData';

export default combineReducers({
	datas: reducerData,
});

