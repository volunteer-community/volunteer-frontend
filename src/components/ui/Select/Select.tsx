import React, {ForwardedRef, forwardRef } from 'react';

interface SelectProps extends React.HTMLProps<HTMLSelectElement> {
  children: React.ReactNode;
}

const Select = forwardRef(({ children, ...props }: SelectProps, ref: ForwardedRef<HTMLSelectElement>) => {
  return <select {...props} ref={ref}>{children}</select>;
})
export default Select;
