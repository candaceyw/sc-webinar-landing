import axios from 'axios';

export const ADD_REG = 'ADD_REG';
export const START = 'START';
export const SUCCESS = 'SUCCESS';
export const FAIL = 'FAIL';

// Get All Launches data
export const getReg = () => (dispatch) => {
	dispatch({ type: START });

	axios
		.get('https://sc-webinar.herokuapp.com/registration')
		.then((res) => {
			console.log('res', res.data);

			dispatch({
				type: SUCCESS,
				payload: res.data,
			});
		})
		.catch((err) => {
			console.log('err', err);

			dispatch({
				type: FAIL,
				payload: err,
			});
		});
};

// Get Next Launch data
export const addReg = () => (dispatch) => {
	dispatch({ type: START });

	axios
		.post('https://sc-webinar.herokuapp.com/registration')
		.then((res) => {
			console.log('NEXT res', res.data);

			dispatch({
				type: SUCCESS,
				payload: res.data,
			});
		})
		.catch((err) => {
			console.log('err', err);

			dispatch({
				type: FAIL,
				payload: err,
			});
		});
};
