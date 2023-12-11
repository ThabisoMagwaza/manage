'use client';
import styled from 'styled-components';
import { COLORS } from '@/utils/constants';

function Button({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.button`
  border: none;
  padding: ${12 / 16}rem ${24 / 16}rem;
  background: ${COLORS.Primary59};
  color: ${COLORS.White};
  font-size: 700;
  font-size: ${13 / 16}rem;

  border-radius: 1000px;

  box-shadow: 0px 5px 15px ${COLORS.Primary78};
`;

export default Button;
