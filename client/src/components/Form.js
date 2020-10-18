import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addReg } from '../store/actions';

const Form = ({ addReg }) => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [institution, setInstitution] = useState('');
	const [title, setTitle] = useState('');
	const [state, setState] = useState('');

	const handleSubmit = () => {
		if (
			firstName === '' ||
			lastName === '' ||
			institution === '' ||
			email === ''
		) {
			alert({ html: 'Please enter the first and last name' });
		} else {
			addReg({
				firstName,
				lastName,
				email,
				institution,
				title,
				state,
			});
			setFirstName('');
			setLastName('');
			setEmail('');
			setInstitution('');
			setTitle('');
			setState('');
		}
	};

	return (
		<form action='#' className='form' onSubmit={handleSubmit}>
			<div className='u-margin-bottom-medium'>
				<h2 className='heading-secondary'>RESERVE YOUR SEAT TODAY!</h2>
			</div>

			<div className='form__group'>
				<input
					type='text'
					className='form__input'
					placeholder='First Name'
					id='firstName'
					required
					onChange={(e) => setFirstName(e.target.value)}
					value={firstName}
				/>
				<label htmlFor='firstName' className='form__label'>
					First Name
				</label>
			</div>

			<div className='form__group'>
				<input
					type='text'
					className='form__input'
					placeholder='Last Name'
					id='lastName'
					required
					onChange={(e) => setLastName(e.target.value)}
					value={lastName}
				/>
				<label htmlFor='lastName' className='form__label'>
					Last Name
				</label>
			</div>

			<div className='form__group'>
				<input
					type='email'
					className='form__input'
					placeholder='Email Address'
					id='email'
					required
					value={email}
					onChange={(e) => setEmail(e.target.value)}

					// value={register.email}
				/>
				<label htmlFor='email' className='form__label'>
					Email Address
				</label>
			</div>

			<div className='form__group'>
				<input
					type='text'
					className='form__input'
					placeholder='Financial Institution'
					id='institution'
					required
					// value={register.institution}
					onChange={(e) => setInstitution(e.target.value)}
					value={institution}
				/>
				<label htmlFor='institution' className='form__label'>
					Financial Institution
				</label>
			</div>

			<div className='form__group'>
				<input
					type='text'
					className='form__input'
					placeholder='Title'
					id='title'
					value={title}
					onChange={(e) => setTitle(e.target.value)}

					// value={register.title}
				/>
				<label htmlFor='title' className='form__label'>
					Title
				</label>
			</div>

			<div className='form__group'>
				<input
					type='text'
					className='form__input'
					placeholder='State'
					id='state'
					value={state}
					onChange={(e) => setState(e.target.value)}

					// value={register.state}
				/>
				<label htmlFor='state' className='form__label'>
					State
				</label>
			</div>

			<div className='form__group'>
				<button className='btn btn--orange' type='submit'>
					Submit
				</button>
			</div>
		</form>
	);
};

// export default Form;
export default connect(null, { addReg })(Form);
