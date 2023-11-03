import { GoogleLogin, CredentialResponse } from '@react-oauth/google';

const Google: React.FC = () => {
  return (
    <>
      <GoogleLogin
        onSuccess={(response: CredentialResponse) => {
          console.log(response);
        }}
        onError={() => {
          console.log('Login 실패');
        }}
      />
    </>
  );
};

export default Google;
