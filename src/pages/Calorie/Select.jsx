import React from 'react';
import PropTypes from 'prop-types';

const Select = (props) => (  
  <div className="form-row">
    <label className='font-semibold'>{props.title}</label>
    <select
      // className='ml-2 p-1 border-r-2'
      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-2'
      name={props.name}
      value={props.selectedOption}
      onChange={props.controlFunc}>
      {props.options.map(opt => {
        return (
          <option
            key={opt.value}
            value={opt.value}>{opt.option}</option>
        );
      })}
      
    </select>
  </div>
);

Select.propTypes = {  
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  controlFunc: PropTypes.func.isRequired,
  placeholder: PropTypes.string
};

export default Select;  