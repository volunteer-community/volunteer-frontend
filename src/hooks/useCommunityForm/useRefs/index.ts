import { useRef } from 'react';

type ChangeEventType = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
type RefType = { [key: string]: ChangeEventType };

const useRefs = () => {
  const inputRefs = useRef<RefType>({});
  const communityFormRef = (name: string, ref: ChangeEventType | null) => {
    if (ref) {
      console.log(inputRefs);
      inputRefs.current[name] = ref;
    }
  };
  return {inputRefs, communityFormRef};
};

export default useRefs;
