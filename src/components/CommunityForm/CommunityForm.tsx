import styled from 'styled-components';
import { FileInput, Input } from '@components/ui/Input';
import SelectLabel from '@components/ui/SelectLabel/SelectLabel';
import TextareaLabel from '@components/ui/Textarea';
import { useFormState, useValidation } from '@hooks/form';
import { FormEvent } from 'react';


const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

const CATEGORY_TYPE = [
  { value: '', optionText: '커뮤니티 카테고리를 선택해주세요' },
  { value: '오프라인 캠페인', optionText: '오프라인 캠페인' },
  { value: '온라인 캠페인', optionText: '온라인 캠페인' },
  { value: '전시', optionText: '오프라인 캠페인' },
  { value: 'DIY 프로젝트', optionText: 'DIY 프로젝트' },
];
interface CommunityFormProps {
  initialData: {
    title: string;
    content: string;
    categoryType: string;
    maxParticipant: number;
    location: string;
    file: File[];
  };
  initialImageURLs?: (string | null)[];
}

const CommunityForm = ({ initialData, initialImageURLs }: CommunityFormProps) => {
  const {
    imageURLs,
    communityFormData,
    setCommunityFormData,
    handleCommunityChange,
    setImageURLs,
    handleFileDelectClick,
  } = useFormState(initialData, initialImageURLs);

  const {
    validateStatus,
    validateMessage,
    validateFile,
    validateTitle,
    communityFormRef,
    validateContent,
    validateLocation,
    validateCategoryType,
    validateMaxParticipant,
  } = useValidation();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { title, content, categoryType, maxParticipant, location, file } = communityFormData;
    // if(file === '') return alert('이미지 추가는 필수 입니다.')
    const isEmptyFormData = !title || !content || !categoryType || !maxParticipant || !location;
    if (isEmptyFormData) return alert('모든 값은 입력이 필수 입니다.');
    const formData = new FormData();
    const isExistFile = file;

    if (isExistFile) {
      for (let fileIndex = 0; fileIndex < file.length; fileIndex++) {
        const currentFile = isExistFile[fileIndex];
        const imageBlob = new Blob([currentFile], { type: 'image/jpeg' });
        console.log(imageBlob);
        formData.append('imageList', imageBlob, 'image.jpg');
      }
    }

    const jsonFormData = JSON.stringify({ title, content, categoryType, maxParticipant, location });
    formData.append('communityRequestDto', jsonFormData);
    setCommunityFormData({
      title: '',
      categoryType: '',
      content: '',
      maxParticipant: 10,
      location: '',
      file: [],
    });
    setImageURLs([]);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="title"
        labelText="커뮤니티 이름"
        placeholder="커뮤니티 이름을 작성해주세요"
        onBlur={validateTitle}
        onChange={handleCommunityChange}
        value={communityFormData.title}
        validateText={validateMessage.title}
        isValid={validateStatus.title}
        ref={(ref) => communityFormRef('title', ref)}
      />
      <SelectLabel
        labelText="커뮤니티 카테고리"
        value={communityFormData.categoryType}
        validateText={validateMessage.categoryType}
        onBulr={validateCategoryType}
        onChange={handleCommunityChange}
        isValid={validateStatus.categoryType}
        optionData={CATEGORY_TYPE}
        ref={(ref) => communityFormRef('categoryType', ref)}
      />
      <FileInput
        name="file"
        labelText="이미지"
        multiple={true}
        value={communityFormData.file}
        onBlur={validateFile}
        imageUrls={imageURLs}
        onChange={handleCommunityChange}
        isValid={validateStatus.file}
        validateText={validateMessage.file}
        ref={(ref) => communityFormRef('file', ref)}
        onClick={handleFileDelectClick}
      />
      <Input
        type="number"
        name="maxParticipant"
        labelText="모집인원"
        placeholder="커뮤니티 모집인원을 작성해주세요."
        onBlur={validateMaxParticipant}
        onChange={handleCommunityChange}
        value={communityFormData.maxParticipant}
        validateText={validateMessage.maxParticipant}
        isValid={validateStatus.maxParticipant}
        ref={(ref) => communityFormRef('maxParticipant', ref)}
      />
      <Input
        type="text"
        name="location"
        labelText="활동장소"
        placeholder="커뮤니티 활동 장소을 작성해주세요."
        onBlur={validateLocation}
        onChange={handleCommunityChange}
        value={communityFormData.location}
        validateText={validateMessage.location}
        isValid={validateStatus.location}
        ref={(ref) => communityFormRef('location', ref)}
      />
      <TextareaLabel
        name="content"
        value={communityFormData.content}
        labelText="커뮤니티 소개"
        validateText={validateMessage.content}
        placeholder="커뮤니티 소개를 작성해주세요."
        onBlur={validateContent}
        onChange={handleCommunityChange}
        ref={(ref) => communityFormRef('content', ref)}
        isValid={validateStatus.content}
      />
      <div>
        <button>제출하기</button>
      </div>
    </Form>
  );
};

export default CommunityForm;
