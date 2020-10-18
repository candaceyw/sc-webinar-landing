export const ADD_REG = 'ADD_REG';
export const START = 'START';
export const SUCCESS = 'SUCCESS';
export const FAIL = 'FAIL';

// add registration
export const addReg = (registration) => async (dispatch) => {
	try {
		const res = await fetch('https://sc-webinar.herokuapp.com/registration', {
			method: 'POST',
			body: JSON.stringify(registration),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const data = await res.json();

		dispatch({
			type: ADD_REG,
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: FAIL,
			payload: err.response.statusText,
		});
	}
};
