import styled from 'styled-components';
interface InputLabelWrapProps {
  $isFlie?: string | undefined
}
export const InputLabelWrap = styled.div<InputLabelWrapProps>`
  display: flex;
  flex-direction: ${(props) => (props.$isFlie ? '' : 'column')};
  @media (min-width: 780px) {
    width: 50%;
  }
  @media (min-width: 1200px) {
    width: 50%;
  }
  width: 100%;
  label {
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 16px;
    font-weight: 600;
  }
  input {
    padding: 0 24px;
    height: 42px;
    border-radius: 10px;
    border: ${(props) => (props.$isFlie ? '' : '2px solid #d9d9d9')};
  }
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input[type='file'] {
    position: relative;
    margin-left: 10px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
  }

  input[type='file']::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border: 2px solid #d9d9d9;
    border-radius: 50%;
  }

  input[type='file']::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: url('../src/assets/images/camara_icon.svg');
    background-size: 40px 40px;
    background-repeat: no-repeat;
    background-position: center;
  }
  input[type='file']::file-selector-button {
    visibility: hidden;
  }
  p {
    font-size: 14px;
    height: 14px;
    margin: 10px 0;
  }
`;
