import React from "react"
import { StyledUl } from "components/common"
import SectionTitle from "components/common/SectionTitle"
import * as hash from "util/hash"

interface SummarySectionProps {
  points?: string[]
}

const SummarySection = ({ points }: SummarySectionProps): React.ReactElement => {
  return (
    <section>
      <SectionTitle title="Summary" />

      <StyledUl>
        {points?.map(p => (
          <li key={hash.xxh32(p)}>{p}</li>
        ))}
      </StyledUl>
    </section>
  )
}

export default SummarySection
