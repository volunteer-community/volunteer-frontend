import InputLabel from '@components/ui/InputLabel/InputLabel';
import SelectLabel from '@components/ui/SelectLabel/SelectLabel';
import TextareaLabel from '@components/ui/TextareaLabel/TextareaLabel';
import useCommunityForm from '@hooks/useCommunityForm';
import styled from 'styled-components';

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
    file: string;
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
      <InputLabel
        name="title"
        value={communityFormData.title}
        labelText="커뮤니티 이름"
        type="text"
        validateText={validateMessage.title}
        placeholder="커뮤니티 이름을 작성해주세요"
        onBlur={validateTitle}
        onChange={handleCommunityChange}
        ref={(ref) => communityFormRef('title', ref)}
        isValid={validateStatus.title}
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
      <InputLabel
        type='file'
        name='file'
        isFlie='file'
        multiple={true}
        placeholder='사진을 넣어주세요'
        labelText="이미지"
        value={communityFormData.file}
        validateText={validateMessage.file}
        onChange={handleCommunityChange}
        onBlur={validateFile}
        isValid={validateStatus.file}
        ref={(ref) => communityFormRef('file', ref)}
      />
      <InputLabel
        name="maxParticipant"
        value={communityFormData.maxParticipant}
        labelText="모집인원"
        validateText={validateMessage.maxParticipant}
        placeholder="커뮤니티 모집인원을 작성해주세요"
        type="number"
        onBlur={validateMaxParticipant}
        onChange={handleCommunityChange}
        ref={(ref) => communityFormRef('maxParticipant', ref)}
        isValid={validateStatus.maxParticipant}
      />
      <InputLabel
        name="location"
        value={communityFormData.location}
        labelText="활동장소"
        type="text"
        validateText={validateMessage.location}
        placeholder="커뮤니티 활동장소을 작성해주세요."
        onBlur={validateLocation}
        onChange={handleCommunityChange}
        ref={(ref) => communityFormRef('location', ref)}
        isValid={validateStatus.location}
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
