import { useState, ChangeEvent} from 'react'
interface ProfileData {
	nickName: string
	phoneNum: string
}
const useProfileFormState = (initialData:ProfileData) => {
	const [formData, setFormData] = useState(initialData);
	const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target
		setFormData({...formData, [name]: value})
	}
  return {formData, handleChange};
};

export default useProfileFormState;