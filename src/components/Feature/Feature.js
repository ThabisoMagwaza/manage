'use client';
import styled from 'styled-components';
import { COLORS, QUERIES } from '@/utils/constants';

function Feature({ children, title, number }) {
  return (
    <Wrapper>
      <DesktopNumber>{number}</DesktopNumber>
      <ContentWrapper>
        <Header>
          <MobileNumber>{number}</MobileNumber>
          <Title>{title}</Title>
        </Header>
        <Text>{children}</Text>
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: baseline;
  gap: 28px;
`;

const Number = styled.span`
  width: ${67 / 16}rem;
  height: ${39 / 16}rem;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-shrink: 0;
  flex-grow: 0;

  font-size: 1rem;
  color: ${COLORS.White};
  font-weight: 700;

  background: ${COLORS.Primary59};
  border-radius: 1000px;
`;

const MobileNumber = styled(Number)`
  @media ${QUERIES.mobileAndUp} {
    display: none;
  }
`;

const DesktopNumber = styled(Number)`
  display: none;
  @media ${QUERIES.mobileAndUp} {
    display: flex;
  }
`;

const Title = styled.h3`
  font-size: 1rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media ${QUERIES.mobileAndUp} {
    gap: 19px;
    max-width: 445px;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: baseline;
  gap: 15px;

  background: ${COLORS.Primary96};

  @media ${QUERIES.mobileAndUp} {
    background: revert;
  }
`;

const Text = styled.p`
  margin-right: 16px;
  font-size: ${14 / 16}rem;
  color: ${COLORS.Secondary23};
  opacity: 50.25%;
`;

export default Feature;
