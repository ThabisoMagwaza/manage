'use client';
import styled from 'styled-components';
import { COLORS, QUERIES } from '@/utils/constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Heading2 from '../Heading2';
import Feature from '../Feature';

function Features() {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <SubSectionOne>
          <Heading2>What&apos;s different about Manage?</Heading2>
          <Paragraph>
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </Paragraph>
        </SubSectionOne>
        <SubSectionTwo>
          <Feature number="01" title="Track company-wide progress">
            See how your day-to-day tasks fit into the wider vision. Go from
            tracking progress at the milestone level all the way done to the
            smallest of details. Never lose sight of the bigger picture again.
          </Feature>
          <Feature number="02" title="Advanced built-in reports">
            Set internal delivery estimates and track progress toward company
            goals. Our customisable dashboard helps you build out the reports
            you need to keep key stakeholders informed.
          </Feature>
          <Feature number="03" title="Everything you need in one place">
            Stop jumping from one service to another to communicate, store
            files, track tasks and share documents. Manage offers an all-in-one
            team productivity solution.
          </Feature>
        </SubSectionTwo>
      </InnerWrapper>
    </OuterWrapper>
  );
}

const OuterWrapper = styled.div``;

const InnerWrapper = styled(MaxWidthWrapper)`
  display: flex;
  flex-direction: column;
  gap: 54px;

  @media ${QUERIES.mobileAndUp} {
    flex-direction: row;
  }
`;

const SubSectionOne = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media ${QUERIES.mobileAndUp} {
    text-align: start;
    max-width: 500px;
  }
`;

const SubSectionTwo = styled.div`
  margin-right: -24px;
  margin-left: -8px;

  display: flex;
  flex-direction: column;
  gap: 47px;
`;

const Paragraph = styled.p`
  font-size: ${14 / 16}rem;
  color: ${COLORS.Secondary23};

  line-height: 1.6;

  opacity: 50.25%;

  @media ${QUERIES.mobileAndUp} {
    max-width: 350px;
  }
`;

export default Features;
