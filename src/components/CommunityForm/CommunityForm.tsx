
import styled from 'styled-components';
import { FileInput, Input } from '@components/ui/Input';
import SelectLabel from '@components/ui/SelectLabel/SelectLabel';
import TextareaLabel from '@components/ui/Textarea';
import useCommunityForm from '@hooks/useCommunityForm';

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
}

const CommunityForm = ({ initialData }: CommunityFormProps) => {
  const {
    validateStatus,
    validateMessage,
    communityFormData,
    validateTitle,
    validateFile,
    validateContent,
    validateLocation,
    validateCategoryType,
    validateMaxParticipant,
    communityFormRef,
    handleCommunityChange,
    handleCommunitySubmit,
  } = useCommunityForm(initialData);
  return (
    <Form onSubmit={handleCommunitySubmit}>
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
        onBlur={validateFile}
        onChange={handleCommunityChange}
        isValid={validateStatus.file}
        validateText={validateMessage.file}
        ref={(ref) => communityFormRef('file', ref)}
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
