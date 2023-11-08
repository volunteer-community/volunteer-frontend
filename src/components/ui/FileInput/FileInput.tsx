import { ChangeEvent, forwardRef, ForwardedRef } from 'react';
import Input, { InputProps } from '../Input/Input';

interface FileInputProps extends InputProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
}

const FileInput = forwardRef(
  ({ onChange, onBlur, ...props }: FileInputProps, ref: ForwardedRef<HTMLInputElement>) => {
    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
      onChange(event);
    };
    const handleFileBulr = () => {
      onBlur();
    };
    return <Input {...props} onChange={handleFileChange} onBlur={handleFileBulr} ref={ref} />;
  }
);

export default FileInput