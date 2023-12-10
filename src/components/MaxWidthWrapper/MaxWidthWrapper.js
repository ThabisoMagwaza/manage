'use client';
import styled from 'styled-components';

function MaxWidthWrapper({ children, ...delegated }) {
  return <Wrapper {...delegated}>{children}</Wrapper>;
}

const Wrapper = styled.div`
  max-width: ${1110 + 24 * 2}rem;
  padding: 0 24px;
  margin: 0 auto;
`;

export default MaxWidthWrapper;
