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
}: EntryProps): React.ReactElement => {
  return (
    <StyledDiv>
      <EntryHeader {...{ title, organization, dateFrom, dateTo }} />
      <Points points={points} />
    </StyledDiv>
  )
}

export default Entry
