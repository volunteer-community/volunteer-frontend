import Button from '@components/ui/Button/Button';
import { FileInput, Input } from '@components/ui/Input';
import TextareaLabel from '@components/ui/Textarea';
import { useFormState } from '@hooks/form';
import { FormEvent } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

interface PostFormProps {
  initialData: {
    [key: string]: any;
  };
  mutate: () => void;
  initialImageURLs?: (string | null)[]; // ['slkeke']  [null]
}
const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 80%;
`;

const BtnWrap = styled.div`
  width: 50%;
`;
const StButton = styled(Button)`
  width: 100%;
  height: 50px;
  color: #f3f2f2;
  font-size: 16px;
  font-weight: 600;
  border-radius: 5px;
  background-color: #56c9b6;
`;
const PostForm = ({ initialData, initialImageURLs, mutate }: PostFormProps) => {
  const { communityId, postId } = useParams();
  console.log(communityId, postId)
  const { imageURLs, postFormData, setPostFormData, handleChange, handleFileDelectClick } = useFormState(
    initialData,
    initialImageURLs
  );
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { posterTitle, file, posterContent } = postFormData;
    const isEmptyFormData = !posterTitle || !posterContent;
    if (isEmptyFormData) return alert('모든 값은 입력이 필수 입니다.');
    const formData = new FormData();
    const isExistFile = file;
    if (isExistFile) {
      for (let fileIndex = 0; fileIndex < file.length; fileIndex++) {
        const currentFile = isExistFile[fileIndex];
        const imageBlob = new Blob([currentFile], { type: 'image/jpeg' });

        formData.append('file', imageBlob, 'image.jpg');
      }
    }

    try {
      const jsonFormData = JSON.stringify({
        posterTitle,
        posterContent,
      });
      const blob = new Blob([jsonFormData], { type: 'application/json' });
      formData.append('data', blob);
      if (postId) {
        mutate({ formData, communityId, postId })  
      } else {
        
        mutate({ formData, communityId });
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        labelText="게시물 제목"
        name="posterTitle"
        value={postFormData.posterTitle}
        placeholder=""
        validateText=""
        isValid
        onChange={handleChange}
      />
      <FileInput
        labelText="이미지"
        name="file"
        multiple={false}
        imageUrls={imageURLs}
        maxImage={1}
        onChange={handleChange}
        pageName="post"
        onClick={handleFileDelectClick}
      />
      <TextareaLabel
        labelText="게시물 내용"
        name="posterContent"
        value={postFormData.posterContent}
        isValid
        validateText=""
        onChange={handleChange}
      />
      <BtnWrap>
        <StButton buttonText="제출하기" />
      </BtnWrap>
    </Form>
  );
};

export default PostForm;
