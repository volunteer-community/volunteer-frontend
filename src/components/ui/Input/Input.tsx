import { ForwardedRef, forwardRef } from 'react';

export interface InputProps extends React.HTMLProps<HTMLInputElement> {}

const Input = forwardRef(({ ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
  return <input {...props} ref={ref} />;
});

export default Input;
