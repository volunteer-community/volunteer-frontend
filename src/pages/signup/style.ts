import Image from '@components/ui/Image';
import styled from 'styled-components';

export const ImgWrap = styled.div`
  width: 150px;
  height: 150px;
	border-radius: 50%;
	overflow: hidden;
`;
export const StImage = styled(Image)`
  width: 100%;
  height: 100%;
	object-fit: cover;
`;
