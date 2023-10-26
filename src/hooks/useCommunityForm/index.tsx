import useFormState from '@hooks/useCommunityForm/useFormState';
import useValidation from '@hooks/useCommunityForm/useValidation';

interface useCommunityFormProps {
  title: string;
  content: string;
  categoryType: string;
  maxParticipant: number;
  location: string;
  file: string;
}
const useCommunityForm = (initialData: useCommunityFormProps) => {

  const { communityFormData, handleCommunityChange, handleCommunitySubmit } = useFormState(initialData);
  const {
    validateStatus,
    validateMessage,
    communityFormRef,
    validateFile,
    validateTitle,
    validateContent,
    validateLocation,
    validateCategoryType,
    validateMaxParticipant,
  } = useValidation();

  return {
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
  };
};

export default useCommunityForm;
