import React from "react"
import styled from "styled-components"

const StyledH2 = styled.h2`
  border-bottom: 1px solid #666;
  font-size: 1rem;
  font-weight: 600;
  margin: 1.5rem 0 0.75rem 0;
  padding-bottom: 0.25rem;
`

interface SectionTitleProps {
  className?: string
  title?: string
}

const SectionTitle = ({ className, title }: SectionTitleProps): React.ReactElement => {
  return <StyledH2 className={className}>{title}</StyledH2>
}

export default SectionTitle
