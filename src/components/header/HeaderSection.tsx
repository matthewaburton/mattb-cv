import React, { useEffect } from "react"
import styled from "styled-components"
import ContactName from "components/contact/ContactName"
import ContactDetails from "components/contact/details/ContactDetails"

const StyledHeader = styled.header`
  line-height: 1.6rem;
  margin-bottom: 1rem;
  text-align: right;
`

const StyledContactName = styled(ContactName)`
  /* The text contents of <StyledHeader> are right-aligned, but <StyledContactName>
     floats left to create a large space between it and the rest of the contact info
     details. */
  float: left;

  font-size: 1.5rem;
  margin: 0;
`

const StyledContactDetails = styled(ContactDetails)`
  /* The immediate children of the "Contact Info :: Details" block are
     displayed as inline block elements so that they are presented on a
     single "line". */
  display: inline-block;

  & > :not(:first-child) {
    padding-left: 1.5rem;
  }
`

interface HeaderProps {
  contact: {
    name: string
    details?: {
      location?: string
      phone?: string
      email?: string
    }
  }
}

const HeaderSection = ({ contact }: HeaderProps): React.ReactElement => {
  useEffect(() => {
    console.info("<contact>", contact)
  }, [contact])

  return (
    <StyledHeader>
      <StyledContactName>{contact.name}</StyledContactName>
      <StyledContactDetails {...contact.details} />
    </StyledHeader>
  )
}

export default HeaderSection
