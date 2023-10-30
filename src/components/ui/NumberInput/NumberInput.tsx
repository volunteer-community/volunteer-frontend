import { ChangeEvent, forwardRef, ForwardedRef } from 'react';
import Input, { InputProps } from '../Input/Input';

interface NumberInputProps extends InputProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
}

const NumberInput = forwardRef(
  ({ onChange, onBlur, ...props }: NumberInputProps, ref: ForwardedRef<HTMLInputElement>) => {
    const handleNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
      onChange(event);
    };
    const handleNumberBulr = () => {
      onBlur();
    };
    return <Input {...props} onChange={handleNumberChange} onBlur={handleNumberBulr} ref={ref} />;
  }
);

export default NumberInput;
