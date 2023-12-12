'use client';
import styled from 'styled-components';
import { COLORS } from '@/utils/constants';

function DotButton({ onClick, filled }) {
  return (
    <Button onClick={onClick}>
      <Dot
        style={{
          '--background': (filled && COLORS.Primary59) || 'transparent',
        }}
      />
    </Button>
  );
}

const Dot = styled.span`
  display: block;
  width: ${14 / 16}rem;
  height: ${14 / 16}rem;
  border-radius: 50%;
  border: 2px solid ${COLORS.Primary59};
  background: var(--background);
`;

const Button = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
`;

export default DotButton;
