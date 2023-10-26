import { ChangeEvent, forwardRef, ForwardedRef } from 'react';
import Paragraph from '../Paragraph/Paragraph';
import * as S from './style';
import NumberInput from '../NumberInput/NumberInput';
import TextInput from '../TextInput/TextInput';
import FileInput from '../FileInput/FileInput';

type InputType = 'text' | 'number' | 'file'; // 추가할 타입이 있다면 이곳에 추가

export interface InputLabelProps {
  name: string;
  type?: InputType;
  value?: string | number;
  isValid: boolean;
  placeholder: string;
  labelText: string;
  validateText: string;
  multiple?: boolean;
  onBlur: () => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  
}

const InputLabel = forwardRef(
  (
    { type, labelText, isValid, validateText, name, value, placeholder, multiple, onBlur, onChange }: InputLabelProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    let InputComponent;

    switch (type) {
      case 'text':
        InputComponent = (
          <TextInput
            type="text"
            name={name}
            value={value}
            placeholder={placeholder}
            onBlur={onBlur}
            onChange={onChange}
            ref={ref}
          />
        );
        break;
      case 'number':
        InputComponent = (
          <NumberInput
            type="number"
            name={name}
            value={value}
            placeholder={placeholder}
            onBlur={onBlur}
            onChange={onChange}
            ref={ref}
          />
        );
        break;
      case 'file':
        InputComponent = (
          <FileInput type="file" name={name} multiple={multiple} onBlur={onBlur} onChange={onChange} ref={ref} />
        );
        break;
      default:
        InputComponent = null;
        break;
    }
    return (
      <S.InputLabelWrap color={isValid}>
        <label>{labelText}</label>
        {InputComponent}
        <Paragraph paragraphText={validateText} color={isValid} />
      </S.InputLabelWrap>
    );
  }
);

export default InputLabel;
