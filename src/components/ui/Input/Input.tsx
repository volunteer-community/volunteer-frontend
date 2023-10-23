import { ForwardedRef, forwardRef } from 'react';

interface InputProps extends React.HTMLProps<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
    return <input {...props} ref={ref} />;
  }
);

export default Input

