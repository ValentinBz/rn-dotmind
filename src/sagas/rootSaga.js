import { all, spawn, fork } from 'redux-saga/effects';
import watcherSagaData from './getData';

export default function* saga() {
	yield all([
		spawn(watcherSagaData),
	]);
}
