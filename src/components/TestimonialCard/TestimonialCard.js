'use client';
import styled from 'styled-components';

import Image from 'next/image';
import { COLORS, QUERIES } from '@/utils/constants';

function TestimonialCard({ children, avatar, name }) {
  return (
    <Wrapper>
      <AvatarWrapper>
        <Avatar
          src={avatar}
          width={144}
          height={144}
          alt={`An image of - ${name}`}
        />
      </AvatarWrapper>
      <Name>{name}</Name>
      <Text>{children}</Text>
    </Wrapper>
  );
}

const AvatarWrapper = styled.div`
  width: 72px;
  height: 72px;

  position: absolute;
  top: 0;
  left: 50%;

  transform: translate(-50%, -50%);
`;

const Avatar = styled(Image)`
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  background: ${COLORS.Gray98};
  padding: ${60 / 16}rem ${21 / 16}rem ${42 / 16}rem ${21 / 16}rem;

  position: relative;
  min-width: 100%;

  @media ${QUERIES.mobileAndUp} {
    height: 220px;
  }
`;

const Name = styled.h4`
  font-weight: 700;
  font-size: 1rem;
  color: ${COLORS.Secondary23};
  margin-bottom: 19px;
`;

const Text = styled.p`
  font-size: ${14 / 16}rem;
  opacity: 50.25%;
`;

export default TestimonialCard;
