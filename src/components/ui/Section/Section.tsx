import styled from 'styled-components';


const StSection = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 150px;
	h2 {
		font-size: 20px;
		text-align: center;
    font-family: 'BMDOHYEON'
	}
`;
interface SectionProps {
  children: React.ReactNode;
  sectionTitle: string;
}

const Section = ({ children, sectionTitle }: SectionProps) => {
  return (
    <StSection>
      <h2>{sectionTitle}</h2>
      {children}
    </StSection>
  );
};

export default Section;
