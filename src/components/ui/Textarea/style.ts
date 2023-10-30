import styled from 'styled-components';

export const TextareaLabelWrap = styled.div`
  display: flex;
  flex-direction: column;
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
  textarea {
    font-size: 16px;
    padding: 0 24px;
    height: 280px;
    border-radius: 10px;
    border: 2px solid #d9d9d9;
    resize: none;
  }
  textarea::placeholder {
    font-size: 16px;
  }
  
  p {
    font-size: 14px;
    height: 14px;
    margin: 10px 0;
  }
`;
