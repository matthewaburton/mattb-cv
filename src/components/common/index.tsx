import styled from "styled-components"

export const StyledUl = styled.ul`
  list-style-type: "▪  ";
  margin-top: 0.5rem;
  padding-inline-start: 1rem;

  & > li:not(:last-child) {
    margin-bottom: 0.25rem;
  }
`
