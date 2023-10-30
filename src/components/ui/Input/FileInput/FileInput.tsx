import { ChangeEvent, forwardRef, ForwardedRef } from 'react';
import * as S from './style';
import Paragraph from '@components/ui/Paragraph/Paragraph';
import ImagePreview from './ImagePreview';
import DefalutImage from '@assets/images/image.svg';
export interface FileInputProps {
  name: string;
  isValid: boolean;
  value: File[];
  imageUrls?: (string | null)[];
  labelText: string;
  validateText: string;
  multiple: boolean;
  onClick: (index: number) => void;
  onBlur: () => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const FileInput = forwardRef(
  (
    { multiple, labelText, isValid, imageUrls, validateText, name, onBlur, onChange, onClick }: FileInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    console.log(imageUrls);
  const renderImagePreview = () => {
    const previews = Array(3).fill(DefalutImage);

    if (imageUrls && imageUrls.length > 0) {
      for (let i = 0; i < imageUrls.length; i++) {
        previews[i] = imageUrls[i];
      }
    }

    return previews.map((url, index) => (
      <ImagePreview key={index} src={url} alt={`${index}`} isExist={url !== DefalutImage} onClick={onClick} />
    ));
  };

    return (
      <S.InputLabelWrap>
        <div>
          <label>{labelText}</label>
          <input type="file" name={name} multiple={multiple} ref={ref} onBlur={onBlur} onChange={onChange} />
        </div>
        <S.PreviewWrap>{renderImagePreview()}</S.PreviewWrap>
        <Paragraph paragraphText={validateText} $isValid={isValid} />
      </S.InputLabelWrap>
    );
  }
);

export default FileInput;