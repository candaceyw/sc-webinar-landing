import { START, SUCCESS, ADD_REG } from './actions';

const initialState = {
	data: '',
	// isFetching: false,
	// error: '',
};

export default (state = initialState, action) => {
	console.log('reducer', action);
	switch (action.type) {
		case START:
			return {
				...state,
				isFetching: true,
				error: '',
			};
		case SUCCESS:
			return {
				...state,
				isFetching: false,
				data: action.payload,
			};
		case ADD_REG:
			return {
				...state,
				data: [...state.data, action.payload],
				isFetching: false,
			};

		default:
			return state;
	}
};
