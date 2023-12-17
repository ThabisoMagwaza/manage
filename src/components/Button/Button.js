'use client';
import styled from 'styled-components';
import { COLORS } from '@/utils/constants';

const VARIANTS = {
  default: {
    '--color': COLORS.White,
    '--background': COLORS.Primary59,
    '--shadow': `0px 5px 15px ${COLORS.Primary78}`,
    '--hover-color': COLORS.White,
    '--hover-background': COLORS.Primary72,
  },
  inverted: {
    '--color': COLORS.Primary59,
    '--background': COLORS.White,
    '--shadow': 'none',
    '--hover-color': COLORS.Primary72,
    '--hover-background': COLORS.White,
  },
};

function Button({ children, variant = 'default' }) {
  return <Wrapper style={VARIANTS[variant]}>{children}</Wrapper>;
}

const Wrapper = styled.button`
  border: none;
  padding: ${12 / 16}rem ${24 / 16}rem;
  background: var(--background);
  color: var(--color);
  font-weight: 700;
  font-size: ${13 / 16}rem;

  border-radius: 1000px;

  box-shadow: var(--shadow);
  cursor: pointer;

  &:hover {
    background: var(--hover-background);
    color: var(--hover-color);
  }
`;

export default Button;
