import React from "react"
import SectionTitle from "components/common/SectionTitle"
import Entry from "./entry/Entry"
import * as hash from "util/hash"

type ExperienceEntryProps = React.ComponentProps<typeof Entry>

interface ExperienceSectionProps {
  entries?: ExperienceEntryProps[]
}

const key = (e: ExperienceEntryProps) =>
  hash.xxh32(`${e.title}|${e.organization}|${e.dateFrom}|${e.dateTo}`)

const ExperienceSection = ({ entries }: ExperienceSectionProps): React.ReactElement => {
  return (
    <>
      <SectionTitle title="Experience" />

      <div>
        {entries?.map(e => (
          <Entry key={key(e)} {...e} />
        ))}
      </div>
    </>
  )
}

export default ExperienceSection
