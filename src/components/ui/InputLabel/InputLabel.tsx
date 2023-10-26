import { ChangeEvent, forwardRef, ForwardedRef } from 'react';
import Paragraph from '../Paragraph/Paragraph';
import * as S from './style';
import NumberInput from '../NumberInput/NumberInput';
import TextInput from '../TextInput/TextInput';
import FileInput from '../FileInput/FileInput';

export type InputType = 'text' | 'number' | 'file'; // 추가할 타입이 있다면 이곳에 추가

export interface InputLabelProps {
  name: string;
  type?: InputType;
  value?: string | number | File[] | (string | number)[];
  isValid: boolean;
  placeholder: string;
  isFlie?: string | undefined;
  labelText: string;
  validateText: string;
  multiple?: boolean;
  onBlur: () => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const InputLabel = forwardRef(
  (
    {
      type,
      labelText,
      isValid,
      validateText,
      name,
      value,
      placeholder,
      isFlie,
      multiple,
      onBlur,
      onChange,
    }: InputLabelProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    let InputComponent;
    console.log(value);
    switch (type) {
      case 'text':
        InputComponent = (
          <TextInput
            type={type}
            name={name}
            value={value as string}
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
            type={type}
            name={name}
            value={value as number}
            placeholder={placeholder}
            onBlur={onBlur}
            onChange={onChange}
            ref={ref}
          />
        );
        break;
      case 'file':
        
        InputComponent = (
          <FileInput
            type={type}
            name={name}
            multiple={multiple}
            onBlur={onBlur}
            onChange={onChange}
            ref={ref}
          />
        );
        break;
      default:
        InputComponent = null;
        break;
    }
    return (
      <S.InputLabelWrap $isFlie={isFlie}>
        <label>{labelText}</label>
        {InputComponent}
        <Paragraph paragraphText={validateText} $isValid={isValid} />
      </S.InputLabelWrap>
    );
  }
);

export default InputLabel;
