import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  bottom: 0;
  font-style: italic;
  position: absolute;
  text-align: right;
  width: 100%;
`

const FooterSection = (): React.ReactElement => {
  return <StyledFooter>Last Updated: {new Date().toISOString()}</StyledFooter>
}

export default FooterSection
