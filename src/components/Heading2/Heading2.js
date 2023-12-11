'use client';
import { COLORS } from '@/utils/constants';
import styled from 'styled-components';

function Heading2({ children }) {
  return <Heading>{children}</Heading>;
}

const Heading = styled.h2`
  color: ${COLORS.Secondary23};
  font-size: ${30 / 16}rem;
  font-weight: 700;
`;

export default Heading2;
