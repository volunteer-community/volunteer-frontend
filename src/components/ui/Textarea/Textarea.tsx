import { forwardRef, ForwardedRef } from 'react';

interface TextareaProps extends React.HTMLProps<HTMLTextAreaElement> {}

const Textarea = forwardRef(({ ...props }: TextareaProps, ref: ForwardedRef<HTMLTextAreaElement>) => {
  return <textarea {...props} ref={ref}></textarea>;
});

export default Textarea;
