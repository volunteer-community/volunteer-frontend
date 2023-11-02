import { ChangeEvent, forwardRef, ForwardedRef } from 'react';

import * as S from '../style';
import Paragraph from '@components/ui/Paragraph/Paragraph';

export interface InputProps {
  name: string;
  type: 'text' | 'number';
  value: string | number;
  isValid: boolean;
  placeholder: string;
  labelText: string;
  validateText: string;
  onBlur: () => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input = forwardRef(
  (
    { type, labelText, isValid, validateText, name, value, placeholder, onBlur, onChange }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <S.InputLabelWrap>
        <label>{labelText}</label>
        <input
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          ref={ref}
          onBlur={onBlur}
          onChange={onChange}
        />
   <Paragraph paragraphText={validateText} $isValid={isValid} />
      </S.InputLabelWrap>
    );
  }
);

export default Input;
