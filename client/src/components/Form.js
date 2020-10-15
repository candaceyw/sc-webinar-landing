import React from 'react';

const Form = () => {
  return (
    <form action='#' className='form'>
      <div className='u-margin-bottom-medium'>
        <h2 className='heading-secondary'>RESERVE YOUR SEAT TODAY!</h2>
      </div>

      <div className='form__group'>
        <input
          type='text'
          className='form__input'
          placeholder='First Name'
          id='first-name'
          required
        />
        <label for='name' className='form__label'>
          First Name
        </label>
      </div>

      <div className='form__group'>
        <input
          type='text'
          className='form__input'
          placeholder='Last Name'
          id='last-name'
          required
        />
        <label for='name' className='form__label'>
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
        />
        <label for='email' className='form__label'>
          Email Address
        </label>
      </div>

      <div className='form__group'>
        <input
          type='text'
          className='form__input'
          placeholder='Financial Institution'
          id='name'
          required
        />
        <label for='name' className='form__label'>
          Financial Institution
        </label>
      </div>

      <div className='form__group'>
        <input
          type='text'
          className='form__input'
          placeholder='Title'
          id='name'
        />
        <label for='name' className='form__label'>
          Title
        </label>
      </div>

      <div className='form__group'>
        <input
          type='text'
          className='form__input'
          placeholder='State'
          id='name'
        />
        <label for='name' className='form__label'>
          State
        </label>
      </div>

      <div className='form__group'>
        <button className='btn btn--green'>Submit</button>
      </div>
    </form>
  );
};

export default Form;
