'use client';
import React from 'react';
import styled from 'styled-components';
import DotButton from '../DotButton';

function Carousel({ children }) {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <Wrapper>
      <ElementWrapper>
        {children.map((el, index) => (
          <Element index={activeIndex} key={index}>
            {el}
          </Element>
        ))}
      </ElementWrapper>

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

const Element = styled.div`
  transform: translateX(${({ index }) => `-${index * 100}%`});
  min-width: 100%;

  transition: transform 0.3s ease-in;
`;

const ElementWrapper = styled.div`
  padding-top: 36px;
  width: 100%;
  overflow: hidden;
  display: flex;
`;

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
