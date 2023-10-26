import { useState, ChangeEvent, FormEvent } from 'react';

type ChangeEventType = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

export interface useFormStateProps {
  initialData: {
    title: string;
    content: string;
    categoryType: string;
    maxParticipant: number;
    location: string;
    file: string;
  };
}

const useFormState = ({ initialData }: useFormStateProps) => {
  const [communityFormData, setCommunityFormData] = useState(initialData);
  
  const handleCommunityChange = (event: ChangeEvent<ChangeEventType>) => {
    const { name, value } = event.target;
    console.log(value);
    const isEmpty = value.trim() === '';
    setCommunityFormData({ ...communityFormData, [name]: value });
    if (isEmpty) return;
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
  return { communityFormData, handleCommunityChange, handleCommunitySubmit } ;
};

export default useFormState;
