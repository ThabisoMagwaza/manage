'use client';
import React from 'react';
import styled from 'styled-components';
import DotButton from '../DotButton';

function Carousel({ children }) {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <Wrapper>
      {children[activeIndex]}

      <NavButtons>
        {children.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => setActiveIndex(index)}
            filled={activeIndex === index}
          >
            {index + 1}
          </DotButton>
        ))}
      </NavButtons>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
`;

const NavButtons = styled.div`
  display: flex;
  gap: 5px;
  justify-content: center;
`;

export default Carousel;
