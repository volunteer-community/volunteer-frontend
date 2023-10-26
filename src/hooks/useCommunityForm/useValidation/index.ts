import useRefs from '@hooks/useCommunityForm/useRefs';
import { useState } from 'react';

const useValidation = () => {
  const { inputRefs } = useRefs();
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
  return {
    validateStatus,
    validateMessage,
    validateTitle,
    validateContent,
    validateLocation,
    validateCategoryType,
    validateMaxParticipant,
  };
};

export default useValidation;
