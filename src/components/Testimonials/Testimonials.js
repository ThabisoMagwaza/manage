'use client';
import styled from 'styled-components';
import { QUERIES } from '@/utils/constants';

import TestimonialCard from '../TestimonialCard';
import Heading2 from '../Heading2';
import Carousel from '../Carousel';
import Button from '../Button';

function Testimonials() {
  return (
    <>
      <Heading2>What they&apos;ve said</Heading2>

      <CarouselWrapper>
        <Carousel>
          <TestimonialCard avatar="/images/avatar-anisha.png" name="Anisha Li">
            “Manage has supercharged our team&apos;s workflow. The ability to
            maintain visibility on larger milestones at all times keeps everyone
            motivated.”
          </TestimonialCard>
          <TestimonialCard avatar="/images/avatar-ali.png" name="Ali Bravo">
            “We have been able to cancel so many other subscriptions since using
            Manage. There is no more cross-channel confusion and everyone is
            much more focused.”
          </TestimonialCard>
          <TestimonialCard
            avatar="/images/avatar-richard.png"
            name="Richard Watts"
          >
            “Manage allows us to provide structure and process. It keeps us
            organized and focused. I can&apos;t stop recommending them to
            everyone I talk to!”
          </TestimonialCard>
          <TestimonialCard
            avatar="/images/avatar-shanai.png"
            name="Shanai Gough"
          >
            “Their software allows us to track, manage and collaborate on our
            projects from anywhere. It keeps the whole team in-sync without
            being intrusive.”
          </TestimonialCard>
        </Carousel>

        <ButtonContainer>
          <Button>Get Started</Button>
        </ButtonContainer>
      </CarouselWrapper>
    </>
  );
}

const Wrapper = styled.div`
  margin: 62px 18px;
  text-align: center;

  display: flex;
  flex-direction: column;
  gap: 62px;

  @media ${QUERIES.mobileAndUp} {
    margin-left: 0;
    margin-right: 0;
  }
`;

const CarouselWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 47px;
`;

const ButtonContainer = styled.div`
  align-self: center;
`;

export default Testimonials;
