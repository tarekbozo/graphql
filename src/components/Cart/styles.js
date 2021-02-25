import styled from 'styled-components';
import { StyledLink } from '../StyledLink';

export const CartWrapper = styled(StyledLink).attrs(() => ({
  to: '/cart',
}))`
  margin-left: auto;
  display: flex;
  color: black;
  text-decoration: none;
  &:hover {
    color: gray;
  }

  > span {
    margin-left: 8px;
  }
`;
