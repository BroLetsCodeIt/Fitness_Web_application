import React from 'react';
import PropTypes from 'prop-types';

const SingleInput = (props) => (  
  <div className="form-row">
    <label className='font-semibold'>{props.title}</label>
    <input
      name={props.name}
      type={props.inputType}
      value={props.content}
      onChange={props.controlFunc}
      placeholder={props.placeholder} 
      required={props.required}
      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-2'
     
      />
  </div>
);

SingleInput.propTypes = {  
  inputType: PropTypes.oneOf(['text', 'number']).isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  controlFunc: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default SingleInput;  
