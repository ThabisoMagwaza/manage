'use client';
import styled from 'styled-components';

function VisuallyHidden({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
  position: absolute;
  overflow: hidden;
  width: 1px;
  height: 1px;
  margin: -1px;
  clip: rect(0 0 0 0);
  border: 0;
`;

export default VisuallyHidden;
