import styled, { css } from 'styled-components';

export const Container = styled.article`
  margin-bottom: 24px;

  /* opacity: ${(props) => (props.removed ? 0.5 : 1)}; */

  ${(props) => css`
    opacity: ${props.removed ? 0.5 : 1};
    color: ${props.removed ? '#f00' : '#fff'};
  `}
`;

export const Subtitle = styled.small`
  display: block;
`;

export const Rate = styled.span`
  font-size: 10px;
  opacity: 0.7;
`;
