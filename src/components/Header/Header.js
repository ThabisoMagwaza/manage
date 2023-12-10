'use client';
import styled from 'styled-components';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Image from 'next/image';
import VisuallyHidden from '../VisuallyHidden';
import Link from 'next/link';

function Header() {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <Navigation>
          <Link href="/">
            <Image
              src="/images/logo.svg"
              width={146}
              height={24}
              alt="Manage logo - Navigate home"
            />
          </Link>

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
      </InnerWrapper>
    </OuterWrapper>
  );
}

const OuterWrapper = styled.div``;

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

  padding: 16px;
  margin: -16px;
`;

export default Header;
