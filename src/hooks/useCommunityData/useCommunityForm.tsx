import { ChangeEvent, useRef, useState, FormEvent } from 'react';

type ChangeEventType = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
type RefType = { [key: string]: ChangeEventType };

interface useCommunityFormProps {
  initialData: {
    title: string;
    content: string;
    categoryType: string;
    maxParticipant: number;
    location: string;
    file: string;
  };
}
const useCommunityForm = ({initialData}:useCommunityFormProps) => {
  const inputRefs = useRef<RefType>({});
  const [validateMessage, setValidateMessage] = useState({
    title: '',
    content: '',
    categoryType: '',
    maxParticipant: '',
    location: '',
    file: '',
  });
  const [validateStatus, setValidateStatus] = useState({
    title: true,
    content: true,
    categoryType: true,
    maxParticipant: true,
    location: true,
    file: true,
  });
  const [communityFormData, setCommunityFormData] = useState(initialData);
  console.log(communityFormData)

  const communityFormRef = (name: string, ref: ChangeEventType | null) => {
    if (ref) {
      console.log(inputRefs)
      inputRefs.current[name] = ref;
    }
  };

  const handleCommunityChange = (event: ChangeEvent<ChangeEventType>) => {
    const { name, value } = event.target;
    console.log(value)
    const isEmpty = value.trim() === '';
    setCommunityFormData({ ...communityFormData, [name]: value });
    if (isEmpty) return;
  };

  const validationMessage = (type: string, isError: boolean, errorMessage: string = '') => {
    setValidateMessage({ ...validateMessage, [type]: errorMessage });
    setValidateStatus({ ...validateStatus, [type]: !isError });
  };

  const validateTitle = () => {
    const titleRefValue = inputRefs.current['title'].value;
    const isEmptyTitle = titleRefValue.trim() === '';
    if (isEmptyTitle) {
      validationMessage('title', isEmptyTitle, '커뮤니티 이름을 입력해주세요.');
    } else {
      validationMessage('title', isEmptyTitle);
    }
  };

  const validateContent = () => {
    const contentRefValue = inputRefs.current['content'].value;
    const isEmptyContent = contentRefValue.trim() === '';
    if (isEmptyContent) {
      validationMessage('content', isEmptyContent, '커뮤니티 소개를 작성해주세요.');
    } else {
      validationMessage('content', isEmptyContent);
    }
  };

  const validateCategoryType = () => {

    const categoryTypeRefValue = inputRefs.current['categoryType'].value;
    const isEmptyCategoryType = categoryTypeRefValue.trim() === '';
    if (isEmptyCategoryType) {
      validationMessage('categoryType', isEmptyCategoryType, '카테고리를 선택해주세요.');
    } else {
      validationMessage('categoryType', isEmptyCategoryType);
    }
  };

  const validateMaxParticipant = () => {
    const maxParticipantRefValue = inputRefs.current['maxParticipant'].value;
    const isEmptyMaxParticipant = Number(maxParticipantRefValue) < 10;
    const isMultipleOfTen = Number(maxParticipantRefValue) % 10 !== 0;

    if (isEmptyMaxParticipant) {
      validationMessage('maxParticipant', isEmptyMaxParticipant, '최소 인원은 10명 이상이여야합니다.');
    } else {
      validationMessage('maxParticipant', isEmptyMaxParticipant);
    }

    if (isMultipleOfTen) {
      validationMessage('maxParticipant', isMultipleOfTen, '10명 단위로 작성해주세요.');
    } else {
      validationMessage('maxParticipant', isMultipleOfTen);
    }
  };

  const validateLocation = () => {
    const locationRefValue = inputRefs.current['location'].value;
    const isEmptyLocation = locationRefValue.trim() === '';
    if (isEmptyLocation) {
      validationMessage('location', isEmptyLocation, '활동장소를 입력해주세요.');
    } else {
      validationMessage('location', isEmptyLocation);
    }
  };

  const handleCommunitySubmit = (evnet: FormEvent<HTMLFormElement>) => {
    evnet.preventDefault();
    const { title, content, categoryType, maxParticipant, location, file } = communityFormData;
    // if(file === '') return alert('이미지 추가는 필수 입니다.')
    const isEmptyFormData = !title || !content || !categoryType || !maxParticipant || !location;
    if (isEmptyFormData) return alert('모든 값은 입력이 필수 입니다.');
    const formData = new FormData();
    const isExistFile = file;
    if (isExistFile) {
      for (let fileIndex = 0; fileIndex < file.length; fileIndex++) {
        formData.append('file', isExistFile[fileIndex]);
      }
    }

    const jsonFormData = JSON.stringify({ title, content, categoryType, maxParticipant, location });
    formData.append('data', jsonFormData);
    setCommunityFormData({
      title: '',
      categoryType: '',
      content: '',
      maxParticipant: 10,
      location: '',
      file: '',
    });
    for (const [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }
  };

  return {
    validateStatus,
    validateMessage,
    communityFormData,
    validateTitle,
    validateContent,
    validateLocation,
    validateCategoryType,
    validateMaxParticipant,
    communityFormRef,
    handleCommunityChange,
    handleCommunitySubmit,
  };
};

export default useCommunityForm;
