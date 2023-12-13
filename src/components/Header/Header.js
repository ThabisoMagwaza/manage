'use client';
import styled from 'styled-components';

import { COLORS } from '@/utils/constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Image from 'next/image';
import VisuallyHidden from '../VisuallyHidden';
import Link from 'next/link';
import Heading1 from '../Heading1';
import Button from '../Button';
import Logo from '../Logo';

function Header() {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <Navigation>
          <LogoWrapper href="/">
            <Logo />
          </LogoWrapper>

          <OpenMenu>
            <Image
              src="/images/icon-hamburger.svg"
              width={25}
              height={18}
              alt=""
            />
            <VisuallyHidden>Open Menu</VisuallyHidden>
          </OpenMenu>
        </Navigation>
        <HeroWrapper>
          <HeroImageWrapper>
            <HeroImage
              src="/images/illustration-intro.svg"
              width={580}
              height={525}
              alt="An illustration of manage platform graphs and statistics"
              priority={true}
            />
          </HeroImageWrapper>

          <HeroContent>
            <div>
              <Heading1>
                Bring everyone together to build better products.
              </Heading1>

              <SubHeading>
                Manage makes it simple for software teams to plan day-to-day
                tasks while keeping the larger team goals in view.
              </SubHeading>
            </div>

            <Button>Get Started</Button>
          </HeroContent>
        </HeroWrapper>
      </InnerWrapper>
    </OuterWrapper>
  );
}

const LogoWrapper = styled(Link)`
  text-decoration: none;
  width: 110px;
  height: 18px;

  color: ${COLORS.Secondary23};
`;

const OuterWrapper = styled.div`
  background-image: url('/images/bg-tablet-pattern.svg');
  background-repeat: no-repeat;
  background-size: 400px;
  background-position-x: 70px;
  background-position-y: -50px;
`;

const InnerWrapper = styled(MaxWidthWrapper)`
  padding-top: 45px;
`;

const Navigation = styled.nav`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const OpenMenu = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;

  padding: 16px;
  margin: -16px;
`;

const HeroWrapper = styled.div`
  padding-top: 48px;
  margin: 0 -24px;

  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const HeroImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 28px;
  max-width: 540px;
`;

const HeroImage = styled(Image)`
  height: 100%;
`;

const HeroContent = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;

  align-items: center;
  gap: 28px;

  padding-bottom: 93px;

  background-image: url('/images/bg-tablet-pattern.svg');
  background-size: 270px;
  background-repeat: no-repeat;
  background-position: 230px 100px;
`;

const SubHeading = styled.p`
  color: ${COLORS.Secondary23};
  padding: 0 24px;
  padding-top: 10px;
  font-weight: 200;
  opacity: 50.25%;
`;

export default Header;
