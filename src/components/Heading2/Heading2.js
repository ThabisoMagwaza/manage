'use client';
import { COLORS, QUERIES } from '@/utils/constants';
import styled from 'styled-components';

function Heading2({ children, color = COLORS.Secondary23 }) {
  return <Heading style={{ '--color': color }}>{children}</Heading>;
}

const Heading = styled.h2`
  color: var(--color);
  font-size: ${30 / 16}rem;
  font-weight: 700;
  line-height: 1;

  @media ${QUERIES.tabletAndUp} {
    font-size: ${40 / 16}rem;
  }
`;

export default Heading2;
