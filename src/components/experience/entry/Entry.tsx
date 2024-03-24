import React from "react"
import styled from "styled-components"
import { StyledUl } from "components/common"
import EntryHeader from "./EntryHeader"
import * as hash from "util/hash"

const StyledDiv = styled.div`
  padding-bottom: 1rem;
`

type EntryProps = React.ComponentProps<typeof EntryHeader> & {
  points?: string[]
  classes?: string[]
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
  classes,
}: EntryProps): React.ReactElement => {
  const cc = ["work-entry"]
  if (classes?.includes("break-inside-avoid")) {
    cc.push("break-inside-avoid")
  }

  return (
    <StyledDiv className={`${cc.join(" ")}`}>
      <EntryHeader {...{ title, organization, dateFrom, dateTo }} />
      <Points points={points} />
    </StyledDiv>
  )
}

export default Entry
