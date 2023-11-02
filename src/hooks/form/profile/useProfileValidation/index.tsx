import { useState, useRef } from 'react';

type ChangeEventType = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
type RefType = { [key: string]: ChangeEventType };

const useProfileValidation = () => {
  const inputRefs = useRef<RefType>({});

  const [validateMessage, setValidateMessage] = useState({
		nickName: '',
		phoneNum: ''
  });
  const [validateStatus, setValidateStatus] = useState({
    nickName: true,
    phoneNum: true,
  });

  const profileFormRef = (name: string, ref: ChangeEventType | null) => {
    if (ref) {
      inputRefs.current[name] = ref;
    }
  };

  const validationMessage = (type: string, isError: boolean, errorMessage: string = '') => {
    setValidateMessage({ ...validateMessage, [type]: errorMessage });
    setValidateStatus({ ...validateStatus, [type]: !isError });
  };

  const validateNickName = () => {
    const nickNameInput = inputRefs.current['nickName'];
    const nickNameRefValue = nickNameInput.value;
    const isEmptyNickName = nickNameRefValue.trim() === '';
    if (isEmptyNickName) {
      validationMessage('nickName', isEmptyNickName, '닉네임을 입력해주세요.');
      nickNameInput.style.border = '2px solid #fb304b';
    } else {
      validationMessage('nickName', isEmptyNickName);
      nickNameInput.style.border = '';
    }
  };

  const validatePhoneNumber = () => {
    const contentTextarea = inputRefs.current['phoneNum'];
    const contentRefValue = contentTextarea.value;
    const isEmptyContent = contentRefValue.trim() === '';
    if (isEmptyContent) {
      validationMessage('phoneNum', isEmptyContent, '휴대폰 번호를 작성해주세요.');
      contentTextarea.style.border = '2px solid #fb304b';
    } else {
      validationMessage('phoneNum', isEmptyContent);
      contentTextarea.style.border = '';
    }
  };


  return {
    validateStatus,
    validateMessage,
    validateNickName,
    validatePhoneNumber,
    profileFormRef,
  
  };
};

export default useProfileValidation;
