'use client';
import styled from 'styled-components';
import { COLORS, QUERIES } from '@/utils/constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Heading2 from '../Heading2';
import Button from '../Button';

function CTA() {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <HeadingWrapper>
          <Heading2 color={COLORS.White}>
            Simplify how your team works today.
          </Heading2>
        </HeadingWrapper>

        <Button variant="inverted">Get Started</Button>
      </InnerWrapper>
    </OuterWrapper>
  );
}

const HeadingWrapper = styled.div`
  @media ${QUERIES.tabletAndUp} {
    max-width: 500px;
    text-align: start;
  }
`;

const OuterWrapper = styled.div`
  background-color: ${COLORS.Primary59};
  background-image: url('/images/bg-simplify-section-mobile.svg');
  background-repeat: no-repeat;

  background-position-y: center;

  @media ${QUERIES.tabletAndUp} {
    background-image: url('/images/bg-simplify-section-desktop.svg');
    background-position: 300px 100%;
  }
`;

const InnerWrapper = styled(MaxWidthWrapper)`
  text-align: center;

  padding: 91px 32px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 29px;

  @media ${QUERIES.tabletAndUp} {
    flex-direction: row;
    justify-content: space-between;

    padding: 0 24px;
    height: 220px;
  }
`;

export default CTA;
