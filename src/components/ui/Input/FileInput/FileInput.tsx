import { ChangeEvent, forwardRef, ForwardedRef } from 'react';

import * as S from '../style';
import Paragraph from '@components/ui/Paragraph/Paragraph';

export interface FileInputProps {
  name: string;
  isValid: boolean;
  labelText: string;
  validateText: string;
  multiple: boolean;
  onBlur: () => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const FileInput = forwardRef(
  (
    { multiple, labelText, isValid, validateText, name, onBlur, onChange }: FileInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <S.InputLabelWrap>
        <div>
          <label>{labelText}</label>
          <input type="file" name={name} multiple={multiple} ref={ref} onBlur={onBlur} onChange={onChange} />
        </div>
        <Paragraph paragraphText={validateText} $isValid={isValid} />
      </S.InputLabelWrap>
    );
  }
);

export default FileInput;
