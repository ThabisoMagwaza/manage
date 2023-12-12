'use client';
import styled from 'styled-components';
import { COLORS } from '@/utils/constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Heading1 from '../Heading1';
import Button from '../Button';

function CTA() {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <Heading1 color={COLORS.White}>
          Simplify how your team works today.
        </Heading1>

        <Button variant="inverted">Get Started</Button>
      </InnerWrapper>
    </OuterWrapper>
  );
}

const OuterWrapper = styled.div`
  background-color: ${COLORS.Primary59};
  background-image: url('/images/bg-simplify-section-mobile.svg');
  background-repeat: no-repeat;

  background-position-y: center;
`;

const InnerWrapper = styled(MaxWidthWrapper)`
  text-align: center;

  padding: 91px 32px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 29px;
`;

export default CTA;
