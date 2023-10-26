import { ChangeEvent, forwardRef, ForwardedRef } from 'react';
import Input  from '../Input/Input';
import { InputType } from '../InputLabel/InputLabel';

interface FileInputProps {
  type: InputType;
  name: string;
  multiple?: boolean;
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