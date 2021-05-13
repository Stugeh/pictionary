import {useState} from 'react';

export const useField = (type, label, newValue='') => {
  const [value, setValue] = useState(newValue);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const reset = () => {
    setValue('');
  };

  return {
    type,
    value,
    label,
    onChange,
    reset,
  };
};
