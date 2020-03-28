import styled, { keyframes, css } from "styled-components";

export const Button = styled.button`
  background-color: white;
  color: #cfc02c;
  font-size: 1.1em;
  padding: 0.25em 2em;
  border: 2px solid #cfc02c;
  border-radius: 3px;
  outline: none;
  &:hover {
    color: white;
    background-color: #cfc02c;
    transition: 0.5s all;
  }
`;
