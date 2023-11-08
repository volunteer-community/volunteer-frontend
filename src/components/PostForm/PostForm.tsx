import { FormEvent } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { PostData } from '@apis/post';
import { useFormState } from '@hooks/form';
import TextareaLabel from '@components/ui/Textarea';
import { FileInput, Input } from '@components/ui/Input';
import * as S from './style';
import useShownModal from '@hooks/modal';
import Modal from '@components/ui/Modal';

interface PostFormProps {
  initialData: {
    [key: string]: any;
  };
  mutate: (postData: PostData) => void;
  initialImageURLs?: (string | null)[]; // ['slkeke']  [null]
}

const PostForm = ({ initialData, initialImageURLs, mutate }: PostFormProps) => {
  const pathName = useLocation().pathname;
  const { communityId, postId } = useParams();
  const isPostCreatePage = pathName === `/community/${communityId}/post/create`;
  
  const { imageURLs, postFormData, setImageURLs, setPostFormData, handleChange, handleFileDelectClick } = useFormState(
    initialData,
    initialImageURLs
  );
  
  const { posterTitle, file, posterContent } = postFormData;
  const isEmptyFormData = !(posterTitle && posterContent && file.length);
  const { setIsShown, isShown, handleCloseClick } = useShownModal();
  
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isEmptyFormData) {
      alert('모든 값은 입력이 필수 입니다.');
      setIsShown(true)
    }
      
  };

  const handleConfirmClick = () => {
    const isExistFile = file.length;
    const formData = new FormData();
    
    if (isExistFile) {
      const currentFile = file[0];
      const imageBlob = new Blob([currentFile], { type: 'image/jpeg' });
      formData.append('file', imageBlob, 'image.jpg');
    }
    
    try {
      const jsonFormData = JSON.stringify({
        posterTitle,
        posterContent,
      });
      const blob = new Blob([jsonFormData], { type: 'application/json' });
      formData.append('data', blob);
      if (postId) {
        // mutate({ postData: formData, communityId: communityId, postId: postId })
      } else {
        mutate({ postData: formData, communityId: communityId });
      }
      setPostFormData({
        posterTitle: '',
        posterContent: '',
        file: [],
      });
      setImageURLs([])
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <>
      {isShown && (
        <Modal
          modalText={isPostCreatePage ? '게시물을 작성하시겠어요?' : '게시물을 수정하시겠어요?'}
          handleConfirmClick={handleConfirmClick}
          handleCloseClick={handleCloseClick}
        />
      )}
      <S.Form onSubmit={handleSubmit}>
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
          isPage="postFormPage"
        />
        <S.BtnWrap>
          <S.StButton buttonText="제출하기" />
        </S.BtnWrap>
      </S.Form>
    </>
  );
};

export default PostForm;
