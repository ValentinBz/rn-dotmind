export const GET_DATA_START = 'GET_DATA_START';
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
export const GET_DATA_FAILURE = 'GET_DATA_FAILURE';

export function getData() {
	return {
		type: GET_DATA_START,
	}
}

export function getDataSuccess(result) {
	return {
		type: GET_DATA_SUCCESS,
		payload: result,
	}
}

export function getDataFailure() {
	return {
		type: GET_DATA_FAILURE,
	}
}
