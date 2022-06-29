import styled, { keyframes } from 'styled-components';

export const WapperContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export const WapperItemBarbers = styled.div<{ active?: boolean }>`
  margin: 0 10px;
  :first-child {
    margin-left: 0;
  }
  :last-child {
    margin-right: 0;
  }

  overflow: hidden;

  position: relative;
  max-width: 300px;
  width: 100%;
  height: 230px;
  border: 2px #ffffff solid;
  box-shadow: 0px 3px 4px #d2d2d2;

  transition: 0.2s ease;
  cursor: pointer;

  opacity: ${({ active }) => (active ? '1' : '0.5')};

  :hover {
    opacity: 1;
  }

  :hover {
    .hover-barber-item {
      transform: ease 0.3s;
      bottom: 0;
    }
  }
`;

export const ImageBarber = styled.div<{ img?: string }>`
  width: 100%;
  height: 100%;

  background-image: url(${({ img }) => img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const WapperInfoHover = styled.div`
  position: absolute;
  transition: 0.3s ease;

  bottom: -50%;
  left: 0;

  width: 100%;
  height: 50%;

  background: #282828af;
  padding: 15px 20px;
`;

export const WapperInfo = styled.div`
  display: flex;
  align-items: center;

  margin-top: 15px;
  gap: 5px;
  line-height: 20px;

  svg {
    width: 30px;
  }
`;

export const Value = styled.p`
  font-size: 15px;
  letter-spacing: 0.3px;
  color: #fff;
`;

const zoom = keyframes`
  0% {
    transform: translate(-10px, 10px) scale(0);

  }

  100% {
    transform: translate(-10px, 10px);

  }
`;

export const WapperSelected = styled.div`
  position: absolute;

  top: 0;
  right: 0;

  transform: translate(-10px, 10px);

  background: #4fffaa;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid #fff;

  box-shadow: 0px 0px 10px #80808096;

  animation: ${zoom} forwards 0.3s ease;
`;
