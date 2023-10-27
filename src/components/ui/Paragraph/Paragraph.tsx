import styled from 'styled-components';

interface StPagragraphProps {
  color: boolean;
}

const StParagraph = styled.p<StPagragraphProps>`
  color: ${(props) => (props.color ? '': '#fb304b')};
`;

interface ParagraphProps {
  paragraphText: string;
  color: boolean;
}

const Paragraph = ({ paragraphText, color }: ParagraphProps) => {
  return <StParagraph color={color}>{paragraphText}</StParagraph>;
};

export default Paragraph;
