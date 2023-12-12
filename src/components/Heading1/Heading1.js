'use client';
import styled from 'styled-components';

import { COLORS } from '@/utils/constants';

function Heading1({ children, color = COLORS.Secondary23 }) {
  return <Heading style={{ '--color': color }}>{children}</Heading>;
}

const Heading = styled.h1`
  color: var(--color);
  font-weight: 600;
  line-height: 1.1;

  font-size: ${40 / 16}rem;
`;

export default Heading1;
