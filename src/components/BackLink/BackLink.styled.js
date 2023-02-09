import styled from 'styled-components';

export const BackButton = styled.button`
  border: none;
  background: #1d1e1f;
  color: #f2f2f2;
  padding: 10px;
  font-size: 18px;
  border-radius: 5px;
  position: relative;
  box-sizing: border-box;
  transition: all 500ms ease;
  cursor: pointer;
  margin: 15px 0px 0px 15px;

  &:hover {
    background: rgba(0, 0, 0, 0);
    color: #1d1e1f;
    box-shadow: inset 0 0 0 3px #1d1e1f;
  }
`;
