import styled, { css, keyframes } from 'styled-components';

export const WapperServices = styled.div`
  width: 100%;
`;

export const ListServices = styled.ul`
  width: 100%;
  display: flex;
`;

export const ItemServices = styled.li<{ active?: boolean }>`
  max-width: 215px;
  width: 100%;
  height: 160px;
  position: relative;
  cursor: pointer;

  padding: 2px;
  border: 2px solid #ffffff;
  transition: 0.3s ease;
  opacity: ${({ active }) => (active ? '1' : '0.5')};
  margin: 0 10px;

  :first-child {
    margin-left: 0;
  }

  :last-child {
    margin-right: 0;
  }

  :hover {
    opacity: 1;
    border: 2px solid #d3d3d3;

    .values {
      opacity: 1;
    }
  }

  .values {
    ${({ active }) =>
      active &&
      css`
        opacity: 1;
      `}
  }
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

  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 2px solid #fff;

  box-shadow: 0px 0px 10px #80808096;

  animation: ${zoom} forwards 0.3s ease;
`;

export const ImageService = styled.div<{ image?: string }>`
  width: 100%;
  height: 160px;

  background-image: url(${({ image }) => image});
`;

export const WapperValueName = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);

  text-align: center;
  opacity: 0;
  transition: 0.3s ease;
  font-weight: 600;
`;

export const Name = styled.p`
  line-height: 25px;
  font-size: 19px;
`;

export const Type = styled.span`
  text-transform: uppercase;
  font-size: 12px;
`;

export const Price = styled.p`
  position: absolute;

  bottom: 5px;
  right: 10px;
  font-size: 15px;
  font-weight: 600;
`;
