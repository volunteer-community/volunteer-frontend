import { ChangeEvent, forwardRef, ForwardedRef } from 'react';
import Input, { InputProps } from '../Input/Input';

interface TextInputProps extends InputProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
}

const TextInput = forwardRef(
  ({ onChange, onBlur, ...props }: TextInputProps, ref: ForwardedRef<HTMLInputElement>) => {
    const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
      onChange(event);
    };
    const handleTextBulr = () => {
      onBlur();
    };
    return <Input {...props} onChange={handleTextChange} onBlur={handleTextBulr} ref={ref} />;
  }
);

export default TextInput