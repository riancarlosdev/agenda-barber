import styled, { css } from 'styled-components';

export const WapperContainer = styled.div``;

// STEP YOUR NAME
export const WapperInputName = styled.label`
  max-width: 350px;
  width: 100%;
  position: relative;
`;

export const Input = styled.input`
  outline: none;
  border: none;

  max-width: 350px;
  width: 100%;

  height: 35px;
  padding-left: 10px;
  border: 1px solid #cecece;
  box-shadow: 1px 2px 3px #e3e3e3;

  font-size: 17px;
`;

export const WapperTotalLength = styled.div<{ status?: number }>`
  position: absolute;
  width: 55px;
  height: 35px;

  letter-spacing: 1px;
  font-weight: 600;
  font-size: 14px;

  ${({ status }) => {
    if (status && status > 20) {
      return css`
        background: #ff0f0f;
        color: #fff;
      `;
    }
    if (status && status >= 11) {
      return css`
        background: #cb9200;
      `;
    }
    if ((status && status < 11) || status === 0) {
      return css`
        background: #7df521;
      `;
    }
  }}

  display: flex;
  justify-content: center;
  align-items: center;

  top: -8px;
  right: 0;

  border-top: 1px solid #cecece;
  border-bottom: 1px solid #cecece;
  border-right: 1px solid #cecece;
`;
