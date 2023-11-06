import AddInfoForm from '@components/AddInfoForm';
import Section from '@components/ui/Section/Section';
import { useSearchParams } from 'react-router-dom';
import * as S from './style'


const SignUpPage = () => {

  const [searchParams] = useSearchParams()
  const email = searchParams.get('email') 
  const provider  = searchParams.get('provider') 
  const role = searchParams.get('role')?.slice(5,9); 
  const name = searchParams.get('name'); 
  const picture = searchParams.get('picture'); 
  console.log(role)
  
  const initialData = {
    name,
    email,
    phoneNumber: '',
    nickname: '',
    role,
    provider,
    picture
  }
  return (
    <Section sectionTitle="회원 정보입력">
      <S.ImgWrap>
        <S.StImage src={picture!} alt='프로필 이미지' />
      </S.ImgWrap>
      <AddInfoForm initialData={initialData} />
    </Section>
  );
};



export default SignUpPage;
