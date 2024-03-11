import React from "react"
import styled from "styled-components"
import { StyledUl } from "components/common"
import * as hash from "util/hash"
import EntryHeader from "./EntryHeader"

const StyledDiv = styled.div`
  padding-bottom: 1rem;
`

type EntryProps = React.ComponentProps<typeof EntryHeader> & {
  points?: string[]
  directives?: string[]
}

const Points = ({ points }: Pick<EntryProps, "points">): React.ReactElement => (
  <StyledUl>
    {points?.map(p => (
      <li key={hash.xxh32(p)}>{p}</li>
    ))}
  </StyledUl>
)

const Entry = ({
  title,
  organization,
  dateFrom,
  dateTo,
  points,
  directives,
}: EntryProps): React.ReactElement => {
  const classes = ["work-entry"]
  if (directives?.includes("break-inside-avoid")) {
    classes.push("break-inside-avoid")
  }

  return (
    <StyledDiv className={`${classes.join(" ")}`}>
      <EntryHeader {...{ title, organization, dateFrom, dateTo }} />
      <Points points={points} />
    </StyledDiv>
  )
}

export default Entry
