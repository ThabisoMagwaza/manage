'use client';
import styled from 'styled-components';
import { COLORS } from '@/utils/constants';

function Feature({ children, title, number }) {
  return (
    <Wrapper>
      <Header>
        <Number>{number}</Number>
        <Title>{title}</Title>
      </Header>
      <Text>{children}</Text>
    </Wrapper>
  );
}

const Number = styled.span`
  width: ${67 / 16}rem;
  height: ${39 / 16}rem;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1rem;
  color: ${COLORS.White};
  font-weight: 700;

  background: ${COLORS.Primary59};
  border-radius: 1000px;
`;

const Title = styled.h3`
  font-size: 1rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Header = styled.div`
  display: flex;
  align-items: baseline;
  gap: 15px;

  background: ${COLORS.Primary96};
`;

const Text = styled.p`
  margin-right: 16px;
  font-size: ${14 / 16}rem;
  color: ${COLORS.Secondary23};
  opacity: 50.25%;
`;

export default Feature;
