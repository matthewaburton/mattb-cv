import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import ContactName from "components/contact/ContactName"
import Loader from "components/loader/Loader"
import { ResumeData } from "data"

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

const Cards = styled.div`
  display: grid;
  flex-wrap: wrap;
  grid-gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(30ch, 1fr));
  justify-items: center;
  margin: 0;
  padding: 5rem 0;
  place-content: center;

  a {
    text-decoration: none;
  }
`

const Card = styled.div`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  color: #384347;
  font-size: 1.5rem;
  height: 15rem;
  line-height: 15rem;
  text-align: center;
  transition: 0.3s;
  width: 20rem;

  &:hover {
    box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.2);
  }
`

interface HomeContentProps {
  data: ResumeData
}

const HomeContent = ({ data }: HomeContentProps): React.ReactElement => (
  <>
    <StyledHeader>
      <StyledContactName>{data.contact.name}</StyledContactName>
    </StyledHeader>
    <main>
      <Cards>
        <Link to="cover">
          <Card>Cover Letter</Card>
        </Link>

        <Link to="resume">
          <Card>Resume</Card>
        </Link>
      </Cards>
    </main>
  </>
)

const Home = (): React.ReactElement => <Loader component={HomeContent} />

export default Home
