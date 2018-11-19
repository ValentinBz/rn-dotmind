const defaultState = {
	result: [],
	loading: true,
};

const reducer = (state = defaultState, action) => {
	switch(action.type) {
		case 'GET_DATA_SUCCESS':
			return {
				result: [...state.result, ...action.payload],
				loading: false,
			};
		case 'GET_DATA_FAILURE':
			return {
				result: [...state.result],
				loading: false,
			};
		default:
			return state;
	}
};

export default reducer;
