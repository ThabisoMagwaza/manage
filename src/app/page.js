'use client';
import styled from 'styled-components';
import { QUERIES } from '@/utils/constants';

import CTA from '@/components/CTA';
import Features from '@/components/Features';
import Header from '@/components/Header';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Wrapper>
        <Features />
        <Testimonials />
      </Wrapper>
      <CTA />
      <Footer />
    </main>
  );
}

const Wrapper = styled.div`
  background-image: none;
  background-repeat: no-repeat;

  margin: 62px 18px;
  text-align: center;

  display: flex;
  flex-direction: column;
  gap: 62px;

  @media ${QUERIES.mobileAndUp} {
    margin-left: 0;
    margin-right: 0;

    background-image: url('/images/bg-tablet-pattern.svg');
    background-size: 500px;
    background-position: -50%;
  }

  @media ${QUERIES.tabletAndUp} {
    background-size: revert;
    background-position: -80% 150px;

    margin-bottom: 180px;
    gap: 146px;
  }
`;
