import { useState, ChangeEvent, useEffect } from 'react';

type ChangeEventType = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

export interface useFormStateProps {
  title: string;
  content: string;
  categoryType: string;
  maxParticipant: number;
  location: string;
  file: File[];
}

const useFormState = (initialData: useFormStateProps, initialImageURLs?: (string | null)[]) => {
  const [communityFormData, setCommunityFormData] = useState(initialData);
  const [imageURLs, setImageURLs] = useState(initialImageURLs);

  const handleCommunityChange = (event: ChangeEvent<ChangeEventType>) => {
    const { name, value } = event.target;

    if (event.target instanceof HTMLInputElement && event.target.type === 'file') {
      const fileArray: File[] = event.target.files ? Array.from(event.target.files) : [];
      setCommunityFormData({ ...communityFormData, [name]: fileArray });
      const objectURLs: string[] = [];
      for (let i = 0; i < fileArray.length; i++) {
        const objectURL = URL.createObjectURL(fileArray[i]);
        objectURLs.push(objectURL);
      }
      setImageURLs(objectURLs);
    } else {
      const isEmpty = value.trim() === '';
      setCommunityFormData({ ...communityFormData, [name]: value });
      if (isEmpty) return;
    }
  };

  const handleFileDelectClick = (index: number) => {
    if (imageURLs && imageURLs[index] !== null) {
      URL.revokeObjectURL(imageURLs[index] as string);

      const updatedFiles = [...communityFormData.file];
      updatedFiles.splice(index, 1);
      setCommunityFormData({ ...communityFormData, file: updatedFiles });
    }
    if (imageURLs) {
      const updatedImageURLs = [...imageURLs];
      updatedImageURLs.splice(index, 1);
      setImageURLs(updatedImageURLs);
    }
  };

  useEffect(() => {
    if (initialImageURLs && initialImageURLs.length > 0) {
      setImageURLs(initialImageURLs);
    }
  }, [initialImageURLs]);

  return {
    imageURLs,
    communityFormData,
    handleCommunityChange,
    handleFileDelectClick,
    setCommunityFormData,
    setImageURLs,
  };
};

export default useFormState;
