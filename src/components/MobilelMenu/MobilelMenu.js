'use client';
import Link from 'next/link';
import Image from 'next/image';

import * as Dialog from '@radix-ui/react-dialog';
import styled from 'styled-components';

import { COLORS } from '@/utils/constants';

function MobilelMenu({ children }) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Title>Navigation</Dialog.Title>
        <Overlay />
        <Content>
          <Close>
            <Image src="/images/icon-close.svg" width={21} height={22} alt="" />
          </Close>
          <NavList>
            <li>
              <NavLink href="/">Pricing</NavLink>
            </li>
            <li>
              <NavLink href="/">Product</NavLink>
            </li>
            <li>
              <NavLink href="/">About Us</NavLink>
            </li>
            <li>
              <NavLink href="/">Careers</NavLink>
            </li>
            <li>
              <NavLink href="/">Community</NavLink>
            </li>
          </NavList>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${COLORS.Secondary23};
  font-weight: 700;
`;

const Close = styled(Dialog.Close)`
  align-self: flex-end;
  border: none;
  background: transparent;

  padding: 16px;
  margin: -16px;
`;

const NavList = styled.ul`
  list-style: none;
  background: ${COLORS.White};
  border-radius: 4px;

  text-align: center;
  padding: 40px 0;

  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Content = styled(Dialog.Content)`
  position: absolute;
  top: 0;
  left: 0;

  padding: 45px 24px;

  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
`;

const Overlay = styled(Dialog.Overlay)`
  background-image: linear-gradient(
    to bottom,
    hsl(0, 0%, 0%, 0.01%),
    hsl(0, 0%, 0%, 59.9%)
  );
  position: absolute;
  inset: 0;
  max-height: 100vh;
`;

export default MobilelMenu;
