'use client';
import React from 'react';
import styled from 'styled-components';
import validator from 'validator';

import { COLORS, QUERIES } from '@/utils/constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Link from 'next/link';
import Facebook from '../Facebook';
import YouTube from '../YouTube';
import Twitter from '../Twitter';
import Pintrest from '../Pintrest';
import Instagram from '../Instagram';
import Logo from '../Logo';

function Footer() {
  const [email, setEmail] = React.useState('');
  const [touched, setTouched] = React.useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!validator.isEmail(email)) {
      return;
    }

    alert('Email successfuly sent');

    setEmail('');
    setTouched(false);
  };

  const showError = !validator.isEmail(email) && touched;

  return (
    <Wrapper>
      <InnerWrapper>
        <FormWrapper>
          <Form onSubmit={onSubmit}>
            <InputWrapper>
              <Input
                style={{
                  '--color':
                    (showError && COLORS.Accent59) || COLORS.Secondary23,
                  '--border': (showError && COLORS.Accent59) || 'transparent',
                }}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => setTouched(true)}
                value={email}
                placeholder="Update your inbox..."
                type="email"
              />
              {showError && (
                <ErrorMessage>Please insert a valid email</ErrorMessage>
              )}
            </InputWrapper>
            <Submit>Go</Submit>
          </Form>
          <CopyrightDesktop>
            Copyright 2020. All Rights Reserved
          </CopyrightDesktop>
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

          <SocialNavListMobile>
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
          </SocialNavListMobile>
        </Navigation>

        <LogoSection>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>

          <CopyrightMobile>Copyright 2020. All Rights Reserved</CopyrightMobile>

          <SocialNavListDesktop>
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
          </SocialNavListDesktop>
        </LogoSection>
      </InnerWrapper>
    </Wrapper>
  );
}

const InputWrapper = styled.div``;

const ErrorMessage = styled.div`
  font-size: ${10 / 16}rem;
  font-style: italic;
  color: ${COLORS.Accent59};
  padding-left: 16px;
  margin-top: 4px;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Copyright = styled.p`
  font-size: ${13 / 16}rem;
  color: ${COLORS.White};
  opacity: 50.25%;
`;

const CopyrightMobile = styled(Copyright)`
  @media ${QUERIES.tabletAndUp} {
    display: none;
  }
`;

const CopyrightDesktop = styled(Copyright)`
  display: none;
  @media ${QUERIES.tabletAndUp} {
    display: revert;
    text-align: end;
  }
`;

const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;

  @media ${QUERIES.tabletAndUp} {
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const LogoWrapper = styled.div`
  width: 158px;
  height: 26px;

  color: ${COLORS.White};
`;

const SocialLink = styled(Link)`
  text-decoration: none;
  color: ${COLORS.White};

  &:hover {
    color: ${COLORS.Primary59};
  }
`;

const SocialsNavListItem = styled.li`
  width: 32px;
  height: 32px;

  @media ${QUERIES.tabletAndUp} {
    width: 20px;
    height: 20px;
  }
`;

const SocialsNavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 32px;
`;

const SocialNavListMobile = styled(SocialsNavList)`
  @media ${QUERIES.tabletAndUp} {
    display: none;
  }
`;

const SocialNavListDesktop = styled(SocialsNavList)`
  display: none;

  @media ${QUERIES.tabletAndUp} {
    display: flex;
    gap: 13px;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${COLORS.White};

  &:hover {
    color: ${COLORS.Primary59};
  }
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

const Form = styled.form`
  display: flex;
  gap: 8px;

  @media ${QUERIES.mobileAndUp} {
    align-self: center;
  }
`;

const Input = styled.input`
  flex: 1;

  padding: 0 24px;
  border-radius: 1000px;
  border: 2px solid var(--border);

  color: var(--color);

  font-size: ${13 / 16}rem;
  height: ${44 / 16}rem;

  &::placeholder {
    color: ${COLORS.Gray55};
    font-size: inherit;
  }

  @media ${QUERIES.mobileAndUp} {
    width: 200px;
  }
`;

const Submit = styled.button`
  border: none;
  width: ${80 / 16}rem;
  height: ${44 / 16}rem;
  border-radius: 1000px;
  background: ${COLORS.Primary59};
  color: ${COLORS.White};

  cursor: pointer;

  &:hover {
    background: ${COLORS.Primary72};
  }
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

  @media ${QUERIES.tabletAndUp} {
    flex-direction: row-reverse;
  }
`;

export default Footer;
