import styled from 'styled-components';

export const ImageThumnailWrapper = styled.div`
  cursor: pointer;
  border: 4px solid ${props => (props.isActive ? 'blue' : '#ccc')};
`;
