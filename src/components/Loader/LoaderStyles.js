import styled from 'styled-components';

const StyledLoader = styled.div`
  margin: 0 0 2em;
  height: 100px;
  width: 20%;
  text-align: center;
  padding: 1em;
  margin: 0 auto 1em;
  display: inline-block;
  vertical-align: top;
`;

const StyledSvg = styled.svg`
  fill: ${({ theme }) => theme.primary};
`;

export { StyledLoader, StyledSvg };
