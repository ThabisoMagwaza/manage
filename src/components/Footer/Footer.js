'use client';
import styled from 'styled-components';
import { COLORS } from '@/utils/constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Link from 'next/link';
import Facebook from '../Facebook';
import YouTube from '../YouTube';
import Twitter from '../Twitter';
import Pintrest from '../Pintrest';
import Instagram from '../Instagram';
import Logo from '../Logo';

function Footer() {
  return (
    <Wrapper>
      <InnerWrapper>
        <FormWrapper>
          <Input placeholder="Update your inbox..." />
          <Submit>Go</Submit>
        </FormWrapper>

        <Navigation>
          <NavList>
            <NavListItem>
              <NavLink href="/">Home</NavLink>
            </NavListItem>
            <NavListItem>
              <NavLink href="/">Careers</NavLink>
            </NavListItem>
            <NavListItem>
              <NavLink href="/">Pricing</NavLink>
            </NavListItem>
            <NavListItem>
              <NavLink href="/">Community</NavLink>
            </NavListItem>
            <NavListItem>
              <NavLink href="/">Products</NavLink>
            </NavListItem>
            <NavListItem>
              <NavLink href="/">Privacy Pocity</NavLink>
            </NavListItem>
            <NavListItem>
              <NavLink href="/">About Us</NavLink>
            </NavListItem>
          </NavList>

          <SocialsNavList>
            <SocialsNavListItem>
              <SocialLink href="/">
                <Facebook />
              </SocialLink>
            </SocialsNavListItem>
            <SocialsNavListItem>
              <SocialLink href="/">
                <YouTube />
              </SocialLink>
            </SocialsNavListItem>
            <SocialsNavListItem>
              <SocialLink href="/">
                <Twitter />
              </SocialLink>
            </SocialsNavListItem>
            <SocialsNavListItem>
              <SocialLink href="/">
                <Pintrest />
              </SocialLink>
            </SocialsNavListItem>
            <SocialsNavListItem>
              <SocialLink href="/">
                <Instagram />
              </SocialLink>
            </SocialsNavListItem>
          </SocialsNavList>
        </Navigation>

        <LogoSection>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>

          <Copyright>Copyright 2020. All Rights Reserved</Copyright>
        </LogoSection>
      </InnerWrapper>
    </Wrapper>
  );
}

const Copyright = styled.p`
  font-size: ${13 / 16}rem;
  color: ${COLORS.White};
  opacity: 50.25%;
`;

const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

const LogoWrapper = styled.div`
  width: 158px;
  height: 26px;

  color: ${COLORS.White};
`;

const SocialLink = styled(Link)`
  text-decoration: none;
  color: ${COLORS.White};
`;

const SocialsNavListItem = styled.li`
  width: 32px;
  height: 32px;
`;

const SocialsNavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 32px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${COLORS.White};
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;

  gap: 13px 0;

  width: 100%;
`;

const NavListItem = styled.li`
  width: 50%;
  padding-left: 39px;
`;

const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const FormWrapper = styled.form`
  display: flex;
  gap: 8px;
`;

const Input = styled.input`
  flex: 1;

  padding: 0 24px;
  border-radius: 1000px;
  border: none;

  font-size: ${13 / 16}rem;

  &::placeholder {
    color: ${COLORS.Gray55};
    font-size: inherit;
  }
`;

const Submit = styled.button`
  border: none;
  width: ${80 / 16}rem;
  height: ${44 / 16}rem;
  border-radius: 1000px;
  background: ${COLORS.Primary59};
  color: ${COLORS.White};
`;

const Wrapper = styled.footer`
  background: ${COLORS.Secondary13};
`;

const InnerWrapper = styled(MaxWidthWrapper)`
  padding-top: 51px;
  padding-bottom: 30px;

  display: flex;
  flex-direction: column;
  gap: 54px;
`;

export default Footer;
