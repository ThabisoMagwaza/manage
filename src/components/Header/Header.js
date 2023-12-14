'use client';
import Link from 'next/link';
import styled from 'styled-components';

import { COLORS, QUERIES } from '@/utils/constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Image from 'next/image';
import VisuallyHidden from '../VisuallyHidden';
import Heading1 from '../Heading1';
import Button from '../Button';
import Logo from '../Logo';
import MobilelMenu from '../MobilelMenu';

function Header() {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <Navigation>
          <LogoWrapper href="/">
            <Logo />
          </LogoWrapper>

          <DesktopNavWrapper>
            <NavList>
              <li>
                <NavLink href="/">Product</NavLink>
              </li>
              <li>
                <NavLink href="/">Pricing</NavLink>
              </li>
              <li>
                <NavLink href="/">About Us</NavLink>
              </li>
              <li>
                <NavLink href="/">Careers</NavLink>
              </li>
              <li>
                <NavLink href="/">Commnunity</NavLink>
              </li>
            </NavList>
          </DesktopNavWrapper>
          <HeaderCtaWrapper>
            <Button>Get Started</Button>
          </HeaderCtaWrapper>

          <MobilelMenu>
            <OpenMenu>
              <Image
                src="/images/icon-hamburger.svg"
                width={25}
                height={18}
                alt=""
              />
              <VisuallyHidden>Open Menu</VisuallyHidden>
            </OpenMenu>
          </MobilelMenu>
        </Navigation>

        <HeroWrapper>
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

          <HeroImageWrapper>
            <HeroImage
              src="/images/illustration-intro.svg"
              width={580}
              height={525}
              alt="An illustration of manage platform graphs and statistics"
              priority={true}
            />
          </HeroImageWrapper>
        </HeroWrapper>
      </InnerWrapper>
    </OuterWrapper>
  );
}

const NavLink = styled(Link)`
  text-decoration: none;
  font-size: ${13 / 16}rem;
  font-weight: 500;
  color: ${COLORS.Secondary23};
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 32px;
`;

const DesktopNavWrapper = styled.nav`
  display: none;

  @media ${QUERIES.mobileAndUp} {
    display: revert;
  }
`;

const HeaderCtaWrapper = styled.div`
  display: none;

  @media ${QUERIES.tabletAndUp} {
    display: revert;
  }
`;

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
  background-position-x: 20vw;
  background-position-y: -50px;

  @media (min-width: ${500 / 16}rem) {
    background-position-x: 30vw;
  }

  @media ${QUERIES.mobileAndUp} {
    background-position-x: 50vw;
  }

  @media (min-width: ${800 / 16}rem) {
    background-size: 500px;
    background-position-x: 60vw;
  }

  @media (min-width: ${1200 / 16}rem) {
    background-size: 850px;
    background-position-y: -350px;
    background-position-x: 700px;
  }

  @media (min-width: ${1500 / 16}rem) {
    background-position-x: 50vw;
  }
`;

const InnerWrapper = styled(MaxWidthWrapper)`
  padding-top: 45px;

  @media ${QUERIES.mobileAndUp} {
    padding-bottom: 56px;
  }

  @media ${QUERIES.tabletAndUp} {
    padding-top: 56px;
  }

  @media ${QUERIES.tabletAndUp} {
    padding-bottom: 132px;
  }
`;

const Navigation = styled.nav`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  align-items: center;
`;

const OpenMenu = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;

  padding: 16px;
  margin: -16px;

  &[data-state='open'] {
    display: none;
  }

  @media ${QUERIES.mobileAndUp} {
    display: none;
  }
`;

const HeroWrapper = styled.div`
  padding-top: 48px;
  margin: 0 -24px;

  display: flex;
  flex-direction: column-reverse;
  gap: 18px;

  @media ${QUERIES.mobileAndUp} {
    flex-direction: row;
  }

  @media ${QUERIES.tabletAndUp} {
    padding-top: 120px;
    justify-content: space-between;
  }
`;

const HeroImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 28px;
  max-width: 540px;
  align-self: center;

  @media ${QUERIES.mobileAndUp} {
    padding: 0;
    align-self: revert;
  }
`;

const HeroImage = styled(Image)`
  height: 100%;
  object-fit: cover;
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

  @media ${QUERIES.mobileAndUp} {
    background-image: none;
    max-width: 500px;
    text-align: start;
    align-items: flex-start;
    margin-left: 24px;
  }

  @media (min-width: ${450 / 16}rem) {
    background-position-x: 60vw;
    background-position-y: -5px;
  }

  @media ${QUERIES.tabletAndUp} {
    gap: 40px;
  }
`;

const SubHeading = styled.p`
  color: ${COLORS.Secondary23};
  padding: 0 24px;
  padding-top: 10px;
  font-weight: 200;
  opacity: 50.25%;

  @media ${QUERIES.mobileAndUp} {
    padding-left: 0;
  }

  @media ${QUERIES.tabletAndUp} {
    padding-top: 16px;
    max-width: 350px;
  }
`;

export default Header;
