import React from "react"
import styled from "styled-components"

const StyledHeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  .title {
    font-size: 1rem;
    font-weight: 600;
    margin: 0;
  }

  .employer {
    text-align: left;
  }

  .employer p {
    display: inline;
    margin-block-start: 0;
    margin-block-end: 0;
  }

  .date-range {
    text-align: right;
  }
`

interface EntryHeaderProps {
  title: string
  organization?: string
  dateFrom?: string
  dateTo?: string
}

const fmtTitle = (title: string) => {
  const parts = title.split("+")
  return parts
    .map((p, i) => [p, i < parts.length - 1 ? ["+", <br key={`{p}-{i}`} />] : null])
    .flat()
}

const EntryHeader = ({
  title,
  organization,
  dateFrom,
  dateTo,
}: EntryHeaderProps): React.ReactElement => {
  return (
    <StyledHeaderDiv>
      <div className="title">{fmtTitle(title)}</div>
      <div className="employer">
        <span className="fas fa-building" />
        {organization}
      </div>
      <div className="date-range">
        <span className="fas fa-calendar-alt" />
        {dateFrom} - {dateTo}
      </div>
    </StyledHeaderDiv>
  )
}

export default EntryHeader
